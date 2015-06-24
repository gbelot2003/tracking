<?php namespace App\Listeners;

use App\Event\SaveTransitos;

use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldBeQueued;
use Illuminate\Support\Facades\Session;

class CheckTransitosAbileble {

	/**
	 * Handle the event.
	 *
	 * @param  SaveTransitos  $event
	 * @return void
	 */
	public function handle(SaveTransitos $event)
	{

		$permisos = [8, 9, 10, 11, 12, 13];

		if(in_array($event->cerrada, $permisos)){
			dd($event->cerrada);
			Session::flash('flash_message', 'Esta encomienda ya a sido entregada cerrada');
			return false;
		}
	}

}
