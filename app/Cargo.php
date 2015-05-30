<?php namespace App;

use Illuminate\Database\Eloquent\Model;

class Cargo extends Model {

	/**
	 * @var string
	 */
	protected $table = 'Cargos';

	/**
	 * @var bool
	 */
	public $timestamps = false;

	/**
	 * Muchos usuarios tienen un cargo
	 */
	public function users()
	{
		$this->hasMany('App\User');
	}

}
