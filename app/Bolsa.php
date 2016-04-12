<?php namespace App;

use Illuminate\Database\Eloquent\Model;

class Bolsa extends Model {

	/**
	 * @var string
	 */
	protected $table = 'bolsas';

	/**
	 * Mass assingment protection
	 * @var array
	 */
	protected $fillable = ['code', 'establecimiento_envio_id', 'establecimiento_recive_id', 'estado_id', 'user_id'];

	/**
	 * Una Bolsa tiene varios Shipmentes
	 * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
	 */
	public function shipments()
	{
		return $this->belongsToMany('App\Shipment');
	}

	/**
	 * Referencia al establecimiento al que se envia la bolsa
	 * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
	 */
	public function sender()
	{
		return $this->belongsTo('App\Establecimiento', 'establecimiento_envio_id', 'id');
	}

	/**
	 * Referencia al establecimiento que recibe
	 * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
	 */
	public function reciber()
	{
		return $this->belongsTo('App\Establecimiento', 'establecimiento_recive_id', 'id');
	}

	/**
	 * Una bolsa tiene un estado
	 * @return \Illuminate\Database\Eloquent\Relations\belongsTo
	 */
	public function estado()
	{
		return $this->belongsTo('App\Estado', 'estado_id');
	}
	/**
	 * Una bolsa pertenece a un usuario
	 * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
	 */
	public function user()
	{
		return $this->belongsTo('App\User', 'user_id', 'id');
	}

	public function bolsastransito()
	{
		return $this->hasMany('\App\TransitoBolsa');
	}
}
