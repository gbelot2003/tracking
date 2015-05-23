<?php namespace App;

use Illuminate\Database\Eloquent\Model;

class Estado extends Model {

	/**
	 *  The database table used by the model.
	 *
	 * @var string
	 */
	protected $table = 'estados';

	/**
	 * @var bool
	 */
	public $timestamps = false;
}
