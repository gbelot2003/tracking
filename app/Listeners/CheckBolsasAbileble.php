<?php namespace App\Listeners;

use App\Event\SaveBolsas;

use App\Shipment;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldBeQueued;
use Illuminate\Support\Facades\Session;

class CheckBolsasAbileble {

	public function handle(SaveBolsas $event)
	{
		for ($this->i = 0; $this->i < $event->count; $this->i++)
		{

			$event->shipments = Shipment::findOrFail($event->shipments_id[$this->i]);

			if (count($event->shipments->bolsas) > 0)
			{
					$cerrados = [8, 9, 10, 11, 12, 13];
					if (in_array($event->shipments->estado_id, $cerrados)){
						Session::flash('flash_message', "El registro con numero " . $event->shipments->code . " se encuentra registrada en otra bolsa, La bolsa no a sido creada");
						Session::flash('flash_message_important', true);

					return false;
				}
			}
		}
	}
}
