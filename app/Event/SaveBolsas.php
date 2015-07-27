<?php namespace App\Event;

use App\Events\Event;

use App\Shipment;
use Illuminate\Queue\SerializesModels;

class SaveBolsas extends Event {

	use SerializesModels;
	public $request;
	public $shipments_id;
	public $shipments;
	public $count;
	public $bolsas;
	public $transitoBolsas;
	public $transito;

	public function __construct($request)
	{
		$this->request = $request;
		if(isset($request['shipment_id'])){
			$this->shipments_id = $request['shipment_id'];
			$this->count = count($this->shipments_id);
		}
		else {
			return false;
		}
	}

}
