<?php namespace App\Http\Controllers;

use App\Bolsa;
use App\Http\Requests;
use App\Transito;
use App\TransitoBolsa;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;

class TransitosBolsasController extends Controller {

	public function __construct(){
		$this->middleware('auth');
	}

	public function index($id)
	{
		$transitos = TransitoBolsa::latest()->where('bolsa_id', '=', $id)->get();
		return View('transitosbolsas.index', compact('transitos'));
	}

	/**
	 * Show the form for creating a new resource.
	 *
	 * @return Response
	 */
	public function create($id)
	{
		$bolsa = Bolsa::findOrFail($id);
		$estado = [
			'7' => 'Entragada a terceros',
			'8' => 'Extraviado',
			'9' => 'Robado',
			'11' => 'Entragado',
			'12' => 'Entragado con observaciones',
			'13' => 'Entragado con observaciones',
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
				'user_id' => Auth::id(),
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
		/**
		 * estado -> 1 abierto a trancitos
		 * estado -> 2 en centro de acopio / abierto a transitos
		 * estado -> 3 el paquete esta cerrado para mas transitos
		 * reflex shipments._rel_tranbsitos
		 */
		switch ($estado)
		{
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

		Session::flash('flash_message', 'Transito creado');
		return redirect()->route('bolsas.edit',$request->input('bolsa_id'));

	}

}
