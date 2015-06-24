<?php namespace App\Listeners;

use App\Event\SaveTransitos;

use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldBeQueued;

class TransitosUploadImage {

	/**
	 * Handle the event.
	 *
	 * @param  SaveTransitos  $event
	 * @return void
	 */
	public function handle(SaveTransitos $event)
	{
		if(isset($event->request['firma'])){
			$event->firma = "firma-" . $event->date . "-" .$event->shipment->id . '.' . $event->request['firma']->getClientOriginalExtension();
			$event->request['firma']->move(base_path() . '/public/images/transitos/firmas/', $event->firma);
		}

		if(isset($event->request['foto'])){
			$event->foto = "foto-" . $event->date . "-" .$event->shipment->id . '.' . $event->request['foto']->getClientOriginalExtension();
			$event->request['foto']->move(base_path() . '/public/images/transitos/fotos/', $event->foto);
		}
	}

}
