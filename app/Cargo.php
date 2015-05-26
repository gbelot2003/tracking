<?php namespace App;

use Illuminate\Database\Eloquent\Model;

class Cargo extends Model {

	/**
	 * @var string
	 */
	protected $table = 'cargos';

	/**
	 * @var bool
	 */
	public $timestamps = false;

	/**
	 * Mass Assigment protection
	 * @var array
	 */
	protected $fillable = ['name'];

	/**
	 * Un cargo puede tener varios traders
	 * @return \Illuminate\Database\Eloquent\Relations\HasMany
	 */
	public function trader()
	{
		return $this->hasOne('App\Trader');
	}
}
