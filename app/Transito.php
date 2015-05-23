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

	/**
	 * Un trancito pretences a un Encargo
	 * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
	 */
	public function encargo()
	{
		return $this->belongsTo('App\Shipment');
	}

	/**
	 * Un trancito pertenece a un usuario
	 * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
	 */
	public function user()
	{
		return $this->belongsTo('App\User');
	}

	/**
	 * Un trancito pertenece un estado
	 * @return \Illuminate\Database\Eloquent\Relations\belongsTo
	 */
	public function estados()
	{
		return $this->belongsTo('App\Estado');
	}
}
