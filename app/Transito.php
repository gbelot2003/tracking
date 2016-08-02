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
	protected $fillable = ['shipment_id', 'estado_id', 'seccion_id', 'user_id', 'establecimiento_id', 'details', 'firma', 'foto'];

	/**
	 * Un trancito pretences a un Encargo
	 * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
	 */
	public function encargo()
	{
		return $this->belongsTo('App\Shipment', 'shipment_id');
	}

	public function shipments()
	{
		return $this->belongsTo(Shipment::class, 'shipment_id');
	}

	/**
	 * Un trancito pertenece a un usuario
	 * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
	 */
	public function user()
	{
		return $this->belongsTo('App\User', 'user_id', 'id');
	}

	/**
	 * Un trancito pertenece un estado
	 * @return \Illuminate\Database\Eloquent\Relations\belongsTo
	 */
	public function estados()
	{
		return $this->belongsTo('App\Estado', 'estado_id');
	}

	/**
	 * Esta entrada pertenece a una seccion
	 * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
	 */
	public function establecimiento()
	{
		return $this->belongsTo('App\Establecimiento', 'establecimiento_id', 'id');
	}
}
