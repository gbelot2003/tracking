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
	protected $fillable = ['name', 'departamento_id', 'municipio_id', 'empresa_id'];

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
		return $this->hasOne('App\Trader');
	}

	/**
	 * Un establecimiento pertenece a una empresa
	 * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
	 */
	public function Empresa()
	{
		return $this->belongsTo('App\Empresa', 'empresa_id', 'id');
	}

	/**
	 * @param $query
	 * @return mixed
	 */
	public function scopeLista($query)
	{
		return $query->where('empresa_id', '>=', '2');
	}
}
