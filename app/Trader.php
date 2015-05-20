<?php namespace App;

use Illuminate\Database\Eloquent\Model;

class Trader extends Model {

	/**
	 *  The database table used by the model.
	 *
	 * @var string
	 */
	protected $table = 'traders';

	/**
	 * The attributes that are mass assignable.
	 *
	 * @var array
	 */
	protected $fillable = ['establecimiento_id', 'seccion_id', 'cargo_id', 'first_name', 'last_name', 'user_id'];

	/**
	 * Un trader puede tener a un usuario relacionado
	 * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
	 */
	public function user()
	{
		return $this->belongsTo('App\User');
	}

	/**
	 * Un trader pertenece a un establecimiento
	 * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
	 */
	public function establecimiento()
	{
		return $this->belongsTo('App\Establecimiento');
	}

	/**
	 * Un trader pertenece a una sección
	 * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
	 */
	public function seccion()
	{
		return $this->belongsTo('App\Seccion');
	}

	/**
	 * Un trader tiene un cargo asignado
	 * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
	 */
	public function cargo()
	{
		return $this->belongsTo('App\Cargo');
	}




}
