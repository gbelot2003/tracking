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

}
