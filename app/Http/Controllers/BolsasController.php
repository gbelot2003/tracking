<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Bolsa;
use App\TransitoBolsa;
use App\Events\BolsasStore;
use Barryvdh\DomPDF\Facade as PDF;
use App\Http\Requests;
use App\Events\TransitosBolsasStore;

class BolsasController extends Controller
{


    /**
     * SeccionesController constructor.
     *
     * TODO: agregar permisos respectivos de middlewares
     */
    public function __construct()
    {
        $this->middleware('jwt.auth', ['except' => 'pdfreturn']);
    }


    public function pdfreturn($id)
    {
        $bolsa = Bolsa::bolsasShow()->findOrFail($id);
        $pdf = PDF::loadView('pdf.bolsas.listado', compact('bolsa'));
        return $pdf->download($bolsa->code . '-listado.pdf');
    }

    /**
     * function cargamentos
     * @param Requests $requests
     * @return Requests
     */
    public function cargamentos(Request $requests)
    {
        foreach($requests->bolsas as $bolsa)
        {
            $bolsas = new Request();
            $bolsas['estado_id'] = $requests['estado_id'];
            $bolsas['details'] = $requests['details'];
            $bolsas['bolsa_id'] = $bolsa['id'];
            $bolsas['code'] = $bolsa['code'];
            $bolsas['user_id'] = Auth::Id();
            $bolsas['establecimiento_id'] = Auth::user()->establecimiento_id;
            event(new TransitosBolsasStore($bolsas));
        }
    }


    /**
     * Function findByCode
     * @param $code
     * @return \Illuminate\Http\JsonResponse
     */
    public function findByCode($code)
    {
        $bolsa = Bolsa::bolsasShowByCode()->where('code', '=', $code)->first();
        if(empty($bolsa)){
            return response()->json([
                'message' => 'Record not found',
            ], 404);
        }
        return $bolsa;
    }

    /**
     * function search
     * @param null $date
     * @param null $search
     * @param null $type
     * @return mixed
     */
    public function search($date = null, $search = null, $type = null)
    {
        $bolsas = Bolsa::bolsasearch($date, $search, $type)->paginate(10);
        return $bolsas;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $bolsas = Bolsa::bolsasindex()->orderBy('id', 'DESC')->paginate(10);
        return $bolsas;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request['user_id'] = Auth::id();
        $request['establecimiento_id'] = Auth::user()->establecimiento_id;
        event(new BolsasStore($request));
        return $request->all();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $bolsa = Bolsa::bolsasShow()->findOrFail($id);
        return $bolsa;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $bolsas = Bolsa::findOrFail($id);
        $bolsas->update($request->all());
        return $bolsas;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
