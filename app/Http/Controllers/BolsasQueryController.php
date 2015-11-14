<?php namespace App\Http\Controllers;

use App\Http\Requests;
use App\Http\Controllers\Controller;

use App\Shipment;
use Illuminate\Http\Request;

class BolsasQueryController extends Controller {

	/**
	 * Constructor de Permisos
	 */
	public function __construct()
	{
		$this->middleware('auth');
	}

	public function getShipmentStates($code){
		$code = ltrim($code, '0');
		$shipment = Shipment::with(
			'senders.establecimiento.municipio.departamento',
			'senders.seccion',
			'recivers.establecimiento.municipio.departamento',
			'recivers.seccion'
			)
			->where('code', '=', $code)
			->first();
		//Nesecitamos saber si la encomienda ya esta en alguna bolsa(), o a sido cerrada.

		return $shipment = [
			'estado' => $shipment->estado_id,
			'shipment' => $shipment
		];
	}
}
