<?php namespace App\Http\Controllers;

use App\Event\SaveTransitos;
use App\Http\Requests;
use App\Http\Requests\TransitosFormRequest;
use App\Shipment;
use App\Transito;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
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
		event(new SaveTransitos($request->all()));
		return redirect()->route('shipments.show',$request->input('shipment_id'));
	}

}

