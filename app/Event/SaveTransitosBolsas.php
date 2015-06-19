<?php namespace App\Event;

use App\Events\Event;

use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Auth;

class SaveTransitosBolsas extends Event {

	use SerializesModels;
	public $request;
	public $bolsas_id;
	public $establecimiento_id;
	public $estado_id;
	public $details;
	public $user;
	public $date;
	public $foto;
	public $firma;

	/**
	 * Create a new event instance.
	 *
	 * @return void
	 */
	public function __construct($request, $user)
	{
		$this->request = $request;
		$this->bolsas_id = $request['bolsa_id'];
		$this->establecimiento_id = $user['establecimiento_id'];
		if(isset($request['details'])) {
			$this->details = $request['details'];
		} else {
			$this->details = null;
		}
		$this->date = date('Y-m-d h:m');
		$this->user = $user['id'];
	}

}
