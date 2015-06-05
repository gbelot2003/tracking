<?php namespace App;

use Illuminate\Database\Eloquent\Model;

class bolsa extends Model {

	/**
	 * @var string
	 */
	protected $table = 'bolsas';

	/**
	 * Mass assingment protection
	 * @var array
	 */
	protected $fillable = ['code', 'seccion_id', 'firma'];

	/**
	 * Una Bolsa tiene varios Shipmentes
	 * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
	 */
	public function shipments()
	{
		return $this->belongsToMany('App\Shipment');
	}
}
