<?php namespace App\Listeners;

use App\Event\SaveTransitosBolsas;

use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldBeQueued;

class CheckVariables {

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
		if($event->request['estado_id'] == 15)
		{
			$event->estado_id = 3;
		}elseif($event->request['estado_id'] == 14)
		{
			$event->estado_id = 7;
		}
		else
		{
			$event->estado_id = $event->request['estado_id'];
		}

	}

}
