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
	 * Proteccion para MassAssigments
	 * @var array
	 */
	protected $fillable = ['name'];

	/**
	 * Una seccion puede tener varios traders
	 * @return \Illuminate\Database\Eloquent\Relations\HasMany
	 */
	public function traders()
	{
		return $this->hasMany('App\Trader');
	}
}
