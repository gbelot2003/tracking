<?php namespace App\Http\Controllers;

use App\Http\Requests;
use App\Http\Requests\TransitosFormRequest;
use App\Shipment;
use App\Transito;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;

class TransitosController extends Controller {

	public function __construct(){
		$this->middleware('auth');
	}

	/**
	 * Show the form for creating a new resource.
	 *
	 * @return Response
	 */
	public function create($id)
	{
		$paquete = Shipment::findOrFail($id);
		$estado = [
			'2' => 'Transito, regular',
			'3' => 'Transito, Centro de acopio',
			'5' => 'Transito, presenta daños ligeros',
			'6' => 'Transito, presenta daños graves',
			'7' => 'Entragada a terceros (Sin Cerrrar)',
			'8' => 'Extraviado',
			'9' => 'Robado',
			'11' => 'Entragado y Cerrado',
			'12' => 'Entragado con observaciones',
			'13' => 'Entregado a terceros, entrega final'

		];
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
		$cerrada = $shipmente->estado_id;

		if ($cerrada == 8 or $cerrada == 9 or $cerrada == 10 or $cerrada == 11 or $cerrada == 12 or $cerrada == 13)
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

		$shipmente->estado_id = $request->input('estado_id');
		$shipmente->save();

		/**
		 * estado -> 1 abierto a trancitos
		 * estado -> 2 en centro de acopio / abierto a transitos
		 * estado -> 3 el paquete esta cerrado para mas transitos
		 * reflex shipments._rel_tranbsitos
		 */
		switch ($cerrar_trancito) {
			case 3:
				$message = "Registro ingresado en centro de acopio";
				break;
			case 8:
				$message = "Registro editado, y entrega cerrada";
				break;
			case 9:
				$message = "Registro editado, y entrega cerrada";
				break;
			case 10:
				$message = "Registro editado, y entrega cerrada";
				break;
			case 11:
				$message = "Registro editado, y entrega cerrada";
				break;
			case 12:
				$message = "Registro editado, y entrega cerrada";
				break;
			case 13:
				$message = "Registro editado, y entrega cerrada";
				break;
			default:
				$message = 'Registro editado';
		}

		Session::flash('flash_message', $message);
		return redirect()->route('shipments.show',$request->input('shipment_id'));
	}

}

