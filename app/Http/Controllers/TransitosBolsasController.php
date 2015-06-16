<?php namespace App\Http\Controllers;

use App\bolsa;
use App\Http\Requests;
use App\Http\Controllers\Controller;

use App\Shipment;
use App\Transito;
use App\TransitoBolsa;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\View;

class TransitosBolsasController extends Controller {

	/**
	 * Show the form for creating a new resource.
	 *
	 * @return Response
	 */
	public function create($id)
	{
		$bolsa = Bolsa::findOrFail($id);
		$estado = [
			'4' => 'Transito, en bolsa de transporte',
			'7' => 'Entragada a terceros',
			'8' => 'Extraviado',
			'9' => 'Robado',
			'11' => 'Entragado',
			'12' => 'Entragado con observaciones',
			'13' => 'Entragado con observaciones'

		];
		return View('transitosbolsas.create', compact('bolsa', 'estado'));
	}

	/**
	 * Store a newly created resource in storage.
	 *
	 * @return Response
	 */
	public function store(Request $request)
	{

		$firma_name = null;
		$foto_name = null;
		$bolsa_id = $request->input('bolsa_id');
		$establecimiento = Auth::user()->establecimiento_id;
		$estado = $request->input('estado_id');

		if($estado == 11)
		{
			return redirect()->back()->with('errors', 'Esta Bolsa ya a sido entregada cerrada');
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

		$bolsa = Bolsa::findOrFail($bolsa_id);
		foreach($bolsa->shipments as $shipment){
			Transito::create([
				'shipment_id' => $shipment->id,
				'bolsa_id' => $bolsa_id,
				'estado_id' => $estado,
				'establecimiento_id' => $establecimiento,
				'details' => $request->input('details'),
				'firma' => $firma_name,
				'foto' => $foto_name
			]);
		}

		Auth::User()->transitobolsa()->save(New TransitoBolsa([
			'bolsa_id' => $bolsa_id,
			'estado_id' => $estado,
			'establecimiento_id' => $establecimiento,
			'details' => $request->input('details'),
			'firma' => $firma_name,
			'foto' => $foto_name
		]));

		Session::flash('flash_message', 'Transito creado');
		return redirect()->route('bolsas.edit',$request->input('bolsa_id'));

	}

}
