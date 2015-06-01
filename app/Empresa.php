<?php namespace App;

use Illuminate\Database\Eloquent\Model;

class Empresa extends Model {

	/**
	 *  The database table used by the model.
	 *
	 * @var string
	 */
	protected $table = 'Encomiendas';

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
}
