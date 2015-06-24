<?php namespace App\Event;

use App\Events\Event;

use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Auth;
use App\Shipment;

class SaveTransitos extends Event {

	use SerializesModels;

	public $firma;
	public $foto;
	public $establecimiento;
	public $evaluar_transito;
	public $shipment;
	public $cerrada;
	public $date;

	/**
	 * @param $request
	 */
	public function __construct($request)
	{
		$this->request = $request;
		$this->shipment = Shipment::findOrFail($this->request['shipment_id']);

		$this->establecimiento = Auth::user()->establecimiento_id;
		$this->evaluar_transito = $request['estado_id'];

		$this->cerrada = $this->shipment->estado_id;
		$this->date = date('Y-m-d h:m');
	}

}
