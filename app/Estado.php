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

	/**
	 * Un estado tiene varios trancitos
	 * @return \Illuminate\Database\Eloquent\Relations\HasMany
	 */
	public function transitos()
	{
		return $this->hasOne('App\Transito');
	}

	public function shipments()
	{
		$this->hasOne('App\Shipment');
	}
}
