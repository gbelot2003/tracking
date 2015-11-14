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

	/**
	 * @param $code
	 * @return array
	 */
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

		$passShips = [

		];

		pusher()->trigger('channel', 'event', ['shipment' => $shipment, 'estado' => $shipment->estado_id]);
	}
}
