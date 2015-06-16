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

	public function __construct(){
		$this->middleware('auth');
	}

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
		$establecimiento = Auth::user()->establecimiento_id;
		$cerrar_trancito = $request->input('estado_id');
		$shipmente = Shipment::find($request->input('shipment_id'));
		$estado = $shipmente->estado;

		if($estado == 3)
		{
			return redirect()->back()->with('errors', 'Esta encomienda ya a sido entregada cerrada');
		}

		$date = date('Y-m-d h:m');
		if($request->hasFile('firma'))
		{
			$firma = $request->input('shipment_id') . '.' . $request->file('firma')->getClientOriginalExtension();
			$firma_name = "firma-" . $date .'--'. $firma;
			$request->file('firma')->move(base_path() . '/public/images/transitos/firmas/', $firma_name);
		}

		if($request->hasFile('foto'))
		{
			$foto = $request->input('shipment_id') . '.' . $request->file('foto')->getClientOriginalExtension();
			$foto_name = "foto-" . $date .'-'. $foto;
			$request->file('foto')->move(base_path() . '/public/images/transitos/fotos/', $foto_name);
		}
		Auth::User()->transitos()->save(New Transito([
			'shipment_id' => $request->input('shipment_id'),
			'estado_id' => $request->input('estado_id'),
			'establecimiento_id' => $establecimiento,
			'details' => $request->input('details'),
			'firma' => $firma_name,
			'foto' => $foto_name
		]));
		/**
		 * estado -> 1 abierto a trancitos
		 * estado -> 2 en centro de acopio / abierto a transitos
		 * estado -> 3 el paquete esta cerrado para mas transitos
		 * reflex shipments._rel_tranbsitos
		 */
		switch ($cerrar_trancito) {
			case 3:
				$shipmente->estado = 2; // Aqui esta en centro de acopio o bolsa
				$shipmente->save();
				$message = "Registro ingresado en centro de acopio";
				break;
			case 8:
				$shipmente->estado = 3;
				$shipmente->save();
				$message = "Registro editado, y entrega cerrada";
				break;
			case 9:
				$shipmente->estado = 3;
				$shipmente->save();
				$message = "Registro editado, y entrega cerrada";
				break;
			case 10:
				$shipmente->estado = 3;
				$shipmente->save();
				$message = "Registro editado, y entrega cerrada";
				break;
			case 11:
				$shipmente->estado = 3;
				$shipmente->save();
				$message = "Registro editado, y entrega cerrada";
				break;
			case 12:
				$shipmente->estado = 3;
				$shipmente->save();
				$message = "Registro editado, y entrega cerrada";
				break;
			case 13:
				$shipmente->estado = 3;
				$shipmente->save();
				$message = "Registro editado, y entrega cerrada";
				break;
			default:
				$shipmente->estado = 1;
				$shipmente->save();
				$message = 'Registro editado';
		}

		Session::flash('flash_message', $message);
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

