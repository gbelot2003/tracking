<?php namespace App;

use Illuminate\Database\Eloquent\Model;

class Userstatus extends Model {

	/**
	 * The database table used by the model.
	 *
	 * @var string
	 */
	protected $table = 'userstatuses';

	/**
	 * @var bool
	 */
	public $timestamps = false;

	/**
	 * Un status tiene varios usuarios
	 * @return \Illuminate\Database\Eloquent\Relations\HasMany
	 */
	public function users()
	{
		return $this->hasMany('App\User');
	}
}
