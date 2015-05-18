<?php namespace App;

use Illuminate\Database\Eloquent\Model;

class Establecimiento extends Model {

	/**
	 * @var string
	 */
	protected $table = 'establecimientos';

	/**
	 * @var bool
	 */
	public $timestamps = false;

	/**
	 * Un establecimiento pertenece a un municipio
	 * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
	 */
	public function municipio()
	{
		return $this->belongsTo('App\Municipio');
	}

	/**
	 * Un establecimiento pertenece a un departamento politico
	 * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
	 */
	public function departamento()
	{
		return $this->belongsTo('App\Departamento');
	}


}
