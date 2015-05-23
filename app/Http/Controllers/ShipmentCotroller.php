<?php namespace App\Http\Controllers;

use App\Http\Requests;
use App\Http\Controllers\Controller;

use App\Shipment;
use App\Trader;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\View;

class ShipmentCotroller extends Controller {

	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function index()
	{
		$paquetes = Shipment::orderBy('created_at', 'desc')->get();
		return View('shipments.index', compact('paquetes'));
	}

	/**
	 * Show the form for creating a new resource.
	 *
	 * @return Response
	 */
	public function create()
	{
		/**
		 * Definir una busqueda especifica en el formulario, para las personas a las que se
		 * se les enviara algun paquete o contenido
		 */
		$sender_list 		= Trader::all();
		$sender 			= $sender_list->lists('full_name', 'id');

		$reciver_list 		= Trader::all();
		$reciver 			= $reciver_list->lists('full_name', 'id');

		return View('shipments.create', compact('sender', 'reciver'));
	}

	/**
	 * Store a newly created resource in storage.
	 *
	 * @param Request $request
	 * @return Response
	 */
	public function store(Request $request)
	{
		$shipments = Shipment::create($request->all());
		Session::flash('flash_message', 'El nuevo registro a sido creado');
		return redirect()->route('shipments.show', $shipments->id);
	}

	/**
	 * Display the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($id)
	{
		$paquete = Shipment::findOrFail($id);
		return View('shipments.show', compact('paquete'));
	}

	/**
	 * Show the form for editing the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function edit($id)
	{
		$paquete = Shipment::findOrFail($id);
		$sender_list 		= Trader::all();
		$sender 			= $sender_list->lists('full_name', 'id');

		$reciver_list 		= Trader::all();
		$reciver 			= $reciver_list->lists('full_name', 'id');
		return View('shipments.edit', compact('paquete', 'sender', 'reciver'));
	}

	/**
	 * Update the specified resource in storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update(Request $request, $id)
	{
		$paquete = Shipment::findOrFail($id);
		$paquete->update($request->all());
		Session::flash('flash_message', 'El registro a sido editado');
		return redirect()->route('shipments.show', $paquete->id);

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
