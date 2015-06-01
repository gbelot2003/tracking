<?php namespace App\Http\Controllers;

use App\Estado;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Http\Requests\TransitosFormRequest;
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
	public function store(TransitosFormRequest $request)
	{
		$firma_name = null;
		$foto_name = null;

		$date = date('Y-m-d h:m');
		if($request->hasFile('firma')){
			$firma = $request->input('shipment_id') . '.' . $request->file('firma')->getClientOriginalExtension();
			$firma_name = "firma-" . $date .'--'. $firma;
			$request->file('firma')->move(base_path() . '/public/images/transitos/firmas/', $firma_name);
		}

		if($request->hasFile('foto')){
			$foto = $request->input('shipment_id') . '.' . $request->file('foto')->getClientOriginalExtension();
			$foto_name = "foto-" . $date .'-'. $foto;
			$request->file('foto')->move(base_path() . '/public/images/transitos/fotos/', $foto_name);
		}
		Auth::User()->transitos()->save(New Transito([
			'shipment_id' => $request->input('shipment_id'),
			'estado_id' => $request->input('estado_id'),
			'details' => $request->input('details'),
			'firma' => $firma_name,
			'foto' => $foto_name
		]));

		Session::flash('flash_message', 'El registro a sido editado');
		return redirect()->route('shipments.show',$request->input('shipment_id'));



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

