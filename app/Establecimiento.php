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
	 * Mass assingment protection
	 * @var array
	 */
	protected $fillable = ['name', 'departamento_id', 'municipio_id'];

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

	/**
	 * Un establecimento puede tener varios traders
	 * @return \Illuminate\Database\Eloquent\Relations\HasMany
	 */
	public function traders()
	{
		return $this->hasMany('App\Trader');
	}

	/**
	 * Listado de departamentos para lists
	 * @return array
	 */
	public function getDepartamentoListsAttribute()
	{
		return $this->perms->lists('id');
	}

	/**
	 * Listado de Municipios para lists
	 * @return array
	 */
	public function getMunicipioListsAttribute()
	{
		return $this->perms->lists('id');
	}
}
