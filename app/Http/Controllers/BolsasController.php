<?php

namespace App\Http\Controllers;

use App\TransitoBolsa;
use Illuminate\Http\Request;

use App\Http\Requests;
use App\Bolsa;
use Illuminate\Support\Facades\Auth;


class BolsasController extends Controller
{


    /**
     * SeccionesController constructor.
     *
     * TODO: agregar permisos respectivos de middlewares
     */
    public function __construct()
    {
        $this->middleware('jwt.auth');
    }

    /**
     * @param Requests $requests
     */
    public function cargamentos(Requests $requests)
    {
        // Esta funcion procesa varias bolsas al mismo tiempo
        return $requests;
    }


    /**
     * [findByCode description]
     * @param  [type] $code [description]
     * @return [type]       [description]
     */
    public function findByCode($code)
    {
        $bolsa = Bolsa::bolsasShow()->where('code', '=', $code)->first();
        if(empty($bolsa)){
            return response()->json([
                'message' => 'Record not found',
            ], 404);
        }
        return $bolsa;
    }

    /**
     * [search description]
     * @param  [type] $date   [description]
     * @param  [type] $search [description]
     * @param  [type] $type   [description]
     * @return [type]         [description]
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
        $bolsas = Bolsa::bolsasindex()->paginate(10);
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
        $bolsas = Bolsa::create($request->all());
        $transito = TransitoBolsa::create([
            'bolsa_id' => $bolsas->id,
            'estado_id' => 1,
            'establecimiento_id' => Auth::user()->establecimiento_id,
            'user_id'	 	=> Auth::id(),
            'details' => 'Bolsa Creada'
        ]);
        return $bolsas;
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
