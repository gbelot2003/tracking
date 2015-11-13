<?php namespace App\Http\Controllers;

use App\Http\Requests;
use App\Http\Controllers\Controller;

use App\Http\Requests\ShipmentsFormRequest;
use App\Shipment;
use App\Transito;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class ApiShipmentController extends Controller {

	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function index()
	{
		$shipments = Shipment::limit(50)
			->orderBy('id', 'DESC')
			->get();
		return $shipments->all();
	}

	/**
	 * Show the form for creating a new resource.
	 *
	 * @return Response
	 */
	public function create()
	{
		//
	}

	/**
	 * Store a newly created resource in storage.
	 *
	 * @param ShipmentsFormRequest $request
	 * @return Response
	 */
	public function store(ShipmentsFormRequest $request)
	{
		DB::transaction(function() use ($request, &$data){
			$shipments = Shipment::create($request->all());
			$establecimiento = Auth::user()->establecimiento_id;
			$shipments->estado_id = $request->estado_id;
			$transito = Transito::create([
				'shipment_id'	=> $shipments->id,
				'estado_id'	 	=> $request->estado_id,
				'establecimiento_id' => $establecimiento,
				'user_id'	 	=> $shipments->user_id,
				'details'		=> 'Transito regular, no hay detalles'
			]);
			$shipments->transito_id = $transito->id;
			$shipments->update();
		});
	}

	/**
	 * Display the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($id)
	{
		$shipment = Shipment::with(
			'senders.establecimiento.municipio.departamento',
			'senders.seccion',
			'recivers.establecimiento.municipio.departamento',
			'recivers.seccion',
			'transitos.estados'
		)
		->findOrFail($id);
		return $shipment;
	}

	/**
	 * Show the form for editing the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function edit($id)
	{
		//
	}

	/**
	 * Update the specified resource in storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update($id)
	{
		//
	}

	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
		//
	}

}
