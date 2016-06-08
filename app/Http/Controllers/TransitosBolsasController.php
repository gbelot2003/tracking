<?php

namespace App\Http\Controllers;

use App\Bolsa;
use App\Shipment;
use App\Transito;
use App\TransitoBolsa;
use Illuminate\Http\Request;

use App\Http\Requests;
use Illuminate\Support\Facades\Auth;

class TransitosBolsasController extends Controller
{

    /**
     * SeccionesController constructor.
     */
    public function __construct()
    {
        $this->middleware('jwt.auth');
    }

    /**
     * @param $name
     */
    public function imageRemove($name){
        @unlink(public_path('images/transitos/fotos/' . $name));
    }

    /**
     * @param Request $request
     * @param $id
     * @return \Illuminate\Contracts\Routing\ResponseFactory|string|\Symfony\Component\HttpFoundation\Response
     */
    public function imagePost(Request $request, $id){

        if ($request->hasFile('foto')) {
            $foto = $id . "-" .$request['foto']->getClientOriginalname() . "--" . date('Y-m-d') . '.' . $request['foto']->getClientOriginalExtension();
            $request['foto']->move(base_path() . '/public/images/transitos/fotos/', $foto);
            return $foto;
        }

        if ($request->hasFile('firma')) {
            $firma = $id . "-" .$request['foto']->getClientOriginalname() . "--" . date('Y-m-d') . '.' . $request['foto']->getClientOriginalExtension();
            $request['firma']->move(base_path() . '/public/images/transitos/firmas/', $firma);
            return $firma;
        }

        return response(402);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request['user_id'] = Auth::Id();

        $estado = $request['estado_id'];
        $cierres = [8, 9, 11, 12, 13];

        $transito = TransitoBolsa::create($request->all());

        if(in_array($estado, $cierres)){

            if ($estado == 8 || $estado == 9 || $estado == 13){
                $pstado = $estado;
            } else if($estado == 11 || $estado == 12){
                $pstado = 3;
            }

            $bolsa = Bolsa::findOrFail($request['bolsa_id']);
            $paquetes = $bolsa->shipments;
            foreach($paquetes as $paquete){
                Transito::create([
                    'shipment_id' => $paquete->id,
                    'estado_id' => $pstado,
                    'establecimiento_id' => Auth::user()->establecimiento_id,
                    'user_id'   => $request['user_id'],
                    'details'   => 'Registro agregado desde transto de bolsa No.' . $bolsa->code . " - " . $request['details']
                ]);
            }
            return $transito;
        } else {
            $transito = TransitoBolsa::create($request->all());
            return $transito;
        }

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $transitos = TransitoBolsa::findOrFail($id);
        return $transitos;
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
        $transito = TransitoBolsa::findOrFail($id);
        $transito->update($request->all());
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
