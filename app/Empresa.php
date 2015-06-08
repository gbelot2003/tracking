<?php namespace App;

use Illuminate\Database\Eloquent\Model;

class Empresa extends Model {

	/**
	 *  The database table used by the model.
	 *
	 * @var string
	 */
	protected $table = 'empresas';

	/**
	 * @var bool
	 */
	public $timestamps = false;

	/**
	 * Cada usuario tiene una empresa asignada
	 * @return \Illuminate\Database\Eloquent\Relations\hasMany
	 */
	public function user()
	{
		return $this->hasMany('App\User');
	}


	/**
	 * Una empresa tiene varios establecimientos
	 * @return \Illuminate\Database\Eloquent\Relations\HasMany
	 */
	public function establecimientos()
	{
		return $this->hasMany('App\Establecimiento');
	}

	/**
	 * Conseguir un listado filtrando el primer registro
	 * @return collection
	 */
	public function scopeListado($query)
	{
		return $query->where('id', '!=', '1');
	}
}
