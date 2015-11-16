<?php namespace App\Http\Controllers;

use App\Bolsa;
use App\Http\Requests;
use App\Http\Controllers\Controller;

use App\Http\Requests\BolsasFormRequest;
use App\TransitoBolsa;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ApiBolsasController extends Controller {

	public function __construct()
	{
		$this->middleware('auth');
	}
	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function index()
	{
		$bolsa = Bolsa::all();
		return $bolsa;
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
	 * @param BolsasFormRequest $request
	 * @return Response
	 */
	public function store(BolsasFormRequest $request)
	{
		//Pendiente arreglar transacción
		$prebolsa = new Bolsa($request->all());
		$bolsa = Auth::user()->bolsas()->save($prebolsa);
		$transito = new TransitoBolsa([
			'bolsa_id' 				=> $bolsa->id,
			'estado_id' 			=> $bolsa->estado_id,
			'establecimiento_id' 	=> Auth::user()->establecimiento->id,
			'details'				=> 'Bolsa Creada'
		]);
		Auth::user()->transitobolsa()->save($transito);
		return $bolsa;
	}

	/**
	 * Display the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($id)
	{
		$bolsa = Bolsa::with('shipments', 'sender', 'reciber', 'shipments.recivers.establecimiento', 'shipments.senders.establecimiento')
		->findOrFail($id);
		return $bolsa;
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
