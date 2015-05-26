<?php namespace App\Http\Controllers;

use App\Estado;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Shipment;
use App\Transito;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;

class TransitosController extends Controller {

	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function index()
	{
		//
	}

	/**
	 * Show the form for creating a new resource.
	 *
	 * @return Response
	 */
	public function create($id)
	{
		$paquete = Shipment::findOrFail($id);
		$estado = Estado::lists('name', 'id');
		return View('transitos.create', compact('paquete', 'estado'));
	}

	/**
	 * Store a newly created resource in storage.
	 *
	 * @return Response
	 */
	public function store(Request $request)
	{
		if(!$request->get('images')){
			Auth::User()->transitos()->save(New Transito($request->all()));
			Session::flash('flash_message', 'El registro a sido editado');
			return redirect()->route('shipments.show',$request->input('shipment_id'));
		}
		dd($request->all());


	}

	/**
	 * Display the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($id)
	{
		//
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

