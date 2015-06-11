<?php namespace App\Http\Controllers;

use App\Establecimiento;
use App\Bolsa;
use App\Http\Requests;
use App\Http\Controllers\Controller;

use App\Http\Requests\BolsasFormRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Session;

class BolsasController extends Controller {

	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function index()
	{
		$bolsas = Bolsa::all();
		return View('bolsas.index', compact('bolsas'));
	}

	/**
	 * Show the form for creating a new resource.
	 *
	 * @return Response
	 */
	public function create()
	{
		$remitente = Auth::user()->establecimiento->name;
		$remitente_id = Auth::user()->establecimiento_id;
		$establecimientos = Establecimiento::where('empresa_id', '=', 1)->where('id', '!=', $remitente_id)->lists('name', 'id');

		return View('bolsas.create', compact('establecimientos', 'remitente'));
	}

	/**
	 * Store a newly created resource in storage.
	 *
	 * @return Response
	 */
	public function store(BolsasFormRequest $request)
	{
		$shipments[] = $request->input('shipment_id');
		foreach($shipments as $key => $value):
			print_r($value[$key]);
		endforeach;

		$bolsas = Bolsa::create([
			'code' => $request->input('code'),
			'establecimiento_envio_id' =>  Auth::user()->establecimiento_id,
			'establecimiento_recive_id' => $request->input('destino_id'),
			'estado_id'	=> 3,
			'user_id'	=>Auth::id(),
		]);
		// -> estado de bolsa automaticamente

		//relacionar la bolsa con su contenido
		//Cambiar el estado del contenido de las bolsas
		//redireccionar a bolsas
		Session::flash('flash_message', 'El registro a sido creado');
		return redirect('bolsas');
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
