<?php namespace App\Http\Controllers;

use App\Departamento;
use App\Establecimiento;
use App\Bolsa;
use App\Http\Requests;
use App\Http\Controllers\Controller;

use App\Http\Requests\BolsasFormRequest;
use App\Shipment;
use App\Transito;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
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
		if(Auth::user()->hasRole(['centro-acopio'])) :

			$sinBolsa = Shipment::whereHas('transitos', function($query){
				$query->where('establecimiento_id', '=', $centro_acopio = Auth::user()->establecimiento_id)->latest();
			})
				->with('recivers.establecimiento')
				->where('estado', '=', 2)
				->count();

		else:
			$sinBolsa = Shipment::where('estado', '=', 2)->count();
		endif;
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
		$shipments_id = $request->input('shipment_id');
		$count = count($shipments_id);
		$bolsas = Bolsa::create([
			'code' => $request->input('code'),
			'establecimiento_envio_id' =>  Auth::user()->establecimiento_id,
			'establecimiento_recive_id' => $request->input('destino_id'),
			'estado_id'	=> 3,
			'user_id'	=>Auth::id(),
		]);
		for($i = 0; $i < $count; $i++){
			$transitos = Transito::create([
				'shipment_id' => $shipments_id[$i],
				'estado_id' => 4,
				'establecimiento_id' => Auth::user()->establecimiento_id,
				'user_id'	=> Auth::id()
			]);
			DB::table('shipments')->where('id', $shipments_id[$i])->update(['estado' => 1]);
		}
		$bolsas->shipments()->attach($request->input('shipment_id'));

		return redirect('bolsas')->with('flash_message', 'Bolsa creada');

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
		$remitente = Auth::user()->establecimiento->name;
		$remitente_id = Auth::user()->establecimiento_id;
		$establecimientos = Establecimiento::where('id', '!=', $remitente_id)->lists('name', 'id');
		return View('bolsas.edit', compact('bolsas', 'establecimientos'));
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
		$bolsas->update([
			'establecimiento_recive_id' => $request->input('destino_id'),
		]);

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

}
