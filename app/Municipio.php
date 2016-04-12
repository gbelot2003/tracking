<?php namespace App;

use Illuminate\Database\Eloquent\Model;

class Municipio extends Model {

	/**
	 * @var string
	 */
	protected $table = 'municipios';

	/**
	 * @var bool
	 */
	public $timestamps = false;

	/**
	 * Un Municipio pertence a un Departamento
	 *
	 * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
	 */
	public function departamento()
	{
		return $this->belongsTo('App\Departamento');
	}

	/**
	 * Un municipio puede tener varios establecimientos
	 * @return \Illuminate\Database\Eloquent\Relations\HasMany
	 */
	public function establecimientos()
	{
		return $this->hasMany('App\Establecimiento');
	}
}
