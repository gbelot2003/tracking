<?php namespace App;

use Illuminate\Database\Eloquent\Model;

class Seccion extends Model {

	/**
	 * @var string
	 */
	protected $table = 'seccions';

	/**
	 * @var bool
	 */
	public $timestamps = false;

	/**
	 * Una seccion puede tener varios sujetos.
	 * @return \Illuminate\Database\Eloquent\Relations\HasMany
	 */
	public function sujeto()
	{
		return $this->hasMany('App\Sujeto');
	}
}
