<?php namespace App;

use Illuminate\Database\Eloquent\Model;

class Shipment extends Model {

	/**
	 * @var string
	 */
	protected $table = 'shipments';

	/**
	 * Proteccion para MassAssigments
	 * @var array
	 */
	protected $fillable = ['sender_id', 'reciber_id', 'description'];

	public function senders()
	{
		return $this->belongsTo('App\Trader', 'sender_id', 'id');
	}

	public function recivers()
	{
		return $this->belongsTo('App\Trader', 'reciber_id', 'id');
	}

}
