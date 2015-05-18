<?php namespace App;

use Illuminate\Database\Eloquent\Model;

class Departamento extends Model {

	/**
	 * @var string
	 */
	protected $table = 'departamentos';

	/**
	 * @var bool
	 */
	public $timestamps = false;

	/**
	 * A Departamento tiene muchos Municipios
	 *
	 * @return \Illuminate\Database\Eloquent\Relations\HasMany
	 */
	public function municipios()
	{
		return $this->hasMany('App\Municipio');
	}

	/**
	 * Un departamento tiene muchas sucursales
	 *
	 * @return \Illuminate\Database\Eloquent\Relations\HasMany
	 */
	public function establecimientos()
	{
		return $this->hasMany('App\Establecimiento');
	}

}
