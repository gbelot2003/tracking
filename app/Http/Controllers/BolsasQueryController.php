<?php namespace App\Http\Controllers;

use App\Bolsa;
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
	public function getShipmentStates($code, $bcode){
		$code = ltrim($code, '0');

		$bolsa = Bolsa::where('code', '=', $bcode)->first();

		$shipment = Shipment::with(
			'senders.establecimiento.municipio.departamento',
			'senders.seccion',
			'recivers.establecimiento.municipio.departamento',
			'recivers.seccion'
			)
			->where('code', '=', $code)
			->first();

		if($shipment->estado_id === 4 || $shipment->estado_id === 7 || $shipment->estado_id === 8 || $shipment->estado_id === 9 || $shipment->estado_id === 10 || $shipment->estado_id === 11 || $shipment->estado_id === 12 || $shipment->estado_id === 13){
			pusher()->trigger('channel-' . $bolsa->id, 'event', ['shipment' => $shipment, 'estado' => $shipment->estado_id]);
		} else {
			pusher()->trigger('channel-' . $bolsa->id, 'event', ['shipment' => $shipment, 'estado' => $shipment->estado_id]);
			$bolsa->shipments()->attach($shipment->id);
		}

	}

	public function getShipmentRemove($code, $bcode){
		$code = ltrim($code, '0');
		$shipment = Shipment::where('code', '=', $code)->first();
		$bolsa = Bolsa::where('code', '=', $bcode)->first();

		pusher()->trigger('channel-' . $bolsa->id, 'delete', ['shipment_id' => $shipment->id]);
		$bolsa->shipments()->detach($shipment->id);

	}
}
