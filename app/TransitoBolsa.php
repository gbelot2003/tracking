<?php namespace App;

use Illuminate\Database\Eloquent\Model;

class TransitoBolsa extends Model {
	/**
	 *  The database table used by the model.
	 *
	 * @var string
	 */
	protected $table = 'transito_bolsas';

	/**
	 * The attributes that are mass assignable.
	 *
	 * @var array
	 */
	protected $fillable = ['bolsa_id', 'estado_id', 'seccion_id', 'user_id', 'establecimiento_id', 'details', 'firma', 'foto'];

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

	/**
	 * Un transidto para una bolsa
	 * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
	 */
	public function bolsa()
	{
		return $this->belongsTo('\App\Bolsa', 'bolsa_id', 'id');
	}
}
