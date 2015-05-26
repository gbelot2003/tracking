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
	 * The attributes that are mass assignable.
	 *
	 * @var array
	 */
	protected $fillable = ['name'];
}
