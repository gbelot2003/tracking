<?php namespace App;

use Illuminate\Database\Eloquent\Model;

class Transito extends Model {

	/**
	 *  The database table used by the model.
	 *
	 * @var string
	 */
	protected $table = 'transitos';

	/**
	 * The attributes that are mass assignable.
	 *
	 * @var array
	 */
	protected $fillable = ['shipment_id', 'estado_id', 'user_id', 'details'];

}
