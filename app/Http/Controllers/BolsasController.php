<?php namespace App\Http\Controllers;

use App\Bolsa;
use App\Departamento;
use App\Establecimiento;
use App\Event\SaveBolsas;
use App\Http\Requests;
use App\Http\Requests\BolsasFormRequest;
use App\Shipment;
use App\Transito;
use App\TransitoBolsa;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class BolsasController extends Controller {

	public function __construct()
	{
		$this->middleware('auth');
		$this->middleware('BolsasCheckPerms', ['only' => ['index']]);
	}

	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function index()
	{
		$bolsas = Bolsa::limit(500)->get();
		return View('bolsas.index', compact('bolsas', 'sinBolsa'));
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
		$departamentos =  Departamento::all();
		$establecimientos = Establecimiento::where('id', '!=', $remitente_id)->lists('name', 'id');
		$selectEsta = Establecimiento::where('empresa_id', '!=', 1)->get();
		return View('bolsas.create', compact('departamentos', 'establecimientos', 'remitente', 'selectEsta'));
	}

	/**
	 * Store a newly created resource in storage.
	 *
	 * @return Response
	 */
	public function store(BolsasFormRequest $request)
	{
		event(new SaveBolsas($request->all()));
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

		$bolsas = Bolsa::findOrFail($id);
		$bolsaCerrada = null;
		$cerrada = $bolsas->estado_id;

		if ($cerrada === 3)
		{
			$bolsaCerrada = false;

		} elseif($cerrada === 14){

			$bolsaCerrada == false;

		} elseif(Auth::user()->hasRole(['owner', 'admin', 'supervisor'])){

			$bolsaCerrada = false;

		} else{

			$bolsaCerrada = true;

		}

		$remitente = Auth::user()->establecimiento->name;
		$remitente_id = Auth::user()->establecimiento_id;
		$envio = $bolsas->establecimiento_envio_id;
		$establecimientos = Establecimiento::lists('name', 'id');
		return View('bolsas.edit', compact('bolsas', 'establecimientos', 'bolsaCerrada', 'envio'));
	}

	/**
	 * Update the specified resource in storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update(BolsasFormRequest $request, $id)
	{
		$shipments_id = $request->input('shipment_id');
		$bolsas = Bolsa::findOrFail($id);
		$bolsas->update($request->all());

		if($request->input('removed-items')){
			foreach($request->input('removed-items') as $shipments => $id)
			{
				$transito = Transito::where('shipment_id', '=', $id)->orderBy('id', 'DESC')->first();
				$transito->update([
					'estado_id' => 3
				]);
			}
		}

		if($request->input('addtransito_id')){
			foreach($request->input('addtransito_id') as $shipments => $id)
			{
				$transito = Transito::create([
					'shipment_id' => $id,
					'estado_id' => 4,
					'establecimiento_id' => Auth::user()->establecimiento_id,
					'user_id' => Auth::id()
				]);
			}
		}

		$bolsas->shipments()->sync($request->input('shipment_id'));

		return redirect()->back()->with('flash_message', 'Bolsa Editada');
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

	public function reporte($id)
	{
		$bolsas = Bolsa::findOrFail($id);
		$establecimientos = $bolsas->reciber->name;
		$remitente = Auth::user()->establecimiento->name;
		return View('pdf.reporte-bolsa', compact('bolsas', 'establecimientos', 'remitente'));

	}

}
