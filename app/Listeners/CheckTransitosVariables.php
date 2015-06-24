<?php namespace App\Listeners;

use App\Event\SaveTransitos;

use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldBeQueued;
use Illuminate\Support\Facades\Session;

class CheckTransitosVariables {

	/**
	 * Handle the event.
	 *
	 * @param  SaveTransitos  $event
	 * @return void
	 */
	public function handle(SaveTransitos $event)
	{
		$cerrado = [8, 9, 10, 11, 12, 13];
		if(in_array($event->evaluar_transito, $cerrado)){
			Session::flash('flash_message', 'Registro editado, y entrega cerrada');
		} elseif($event->evaluar_transito === 3){
			Session::flash('flash_message', 'Paquete ingresado a centro de acopio');
		} else {
			Session::flash('flash_message', 'Registro Editado');
		}
	}

}
