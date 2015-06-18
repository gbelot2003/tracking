<?php namespace App\Listeners;

use App\Event\SaveTransitosBolsas;

use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldBeQueued;

class UploadImages {

	/**
	 * Create the event handler.
	 *
	 * @return void
	 */
	public function __construct()
	{
		//
	}

	/**
	 * Handle the event.
	 *
	 * @param  SaveTransitosBolsas  $event
	 * @return void
	 */
	public function handle(SaveTransitosBolsas $event)
	{
		if(isset($event->request['firma'])){
			$event->firma = "firma-" . $event->date . "-" .$event->bolsas_id . '.' . $event->request['firma']->getClientOriginalExtension();
			$event->request['firma']->move(base_path() . '/public/images/transitos/firmas/', $event->firma);
		}

		if(isset($event->request['foto'])){
			$event->foto = "foto-" . $event->date . "-" .$event->bolsas_id . '.' . $event->request['foto']->getClientOriginalExtension();
			$event->request['foto']->move(base_path() . '/public/images/transitos/fotos/', $event->foto);
		}
	}

}
