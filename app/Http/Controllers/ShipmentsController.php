<?php

namespace App\Http\Controllers;

use App\Shipment;
use App\Transito;
use Illuminate\Http\Request;

use App\Http\Requests;
use Illuminate\Support\Facades\Auth;

class ShipmentsController extends Controller
{

    /**
     * SeccionesController constructor.
     */
    public function __construct()
    {
        $this->middleware('jwt.auth');
    }


    public function search($date = null, $search = null, $type = null)
    {
        $query = Shipment::shipmentsearch(Auth::Id(), $date, $search, $type)->paginate(10);
        return $query;
    }


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $shipments = Shipment::shipmentindex(Auth::Id())->paginate(10);
        return $shipments;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
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
        $request['user_id'] = Auth::id();

        $shipment = Shipment::create($request->all());

        $transito = Transito::create([
            'shipment_id'	=> $shipment->id,
            'estado_id'	 	=> $request->estado_id,
            'establecimiento_id' => Auth::user()->establecimiento_id,
            'user_id'	 	=> Auth::id(),
            'details'		=> ''
        ]);

        return $shipment;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $shipment = Shipment::shipmentshow()->findOrFail($id);
        return $shipment;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
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
        $shipment = Shipment::findOrFail($id);
        $shipment->update($request->all());
        return $shipment;
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
