<?php namespace App;

use Illuminate\Database\Eloquent\Model;

class Sujeto extends Model {

	/**
	 * @var string
	 */
	protected $table = 'sujetos';

	/**
	 * @var bool
	 */
	public $timestamps = false;

	/**
	 * Un sujeto puede pertenece a una sección
	 * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
	 */
	public function seccion()
	{
		return $this->belongsTo('App\Seccion');
	}

	/**
	 * Un sujeto tiene un cargo
	 * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
	 */
	public function cargo()
	{
		return $this->belongsTo('App\Cargo');
	}

}
