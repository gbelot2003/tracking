<?php namespace App;

use Illuminate\Database\Eloquent\Model;

class Shipment extends Model {

	/**
	 * @var string
	 */
	protected $table = 'shipments';

	/**
	 * Proteccion para MassAssigments
	 * @var array
	 */
	protected $fillable = ['code', 'sender_id', 'reciber_id', 'description'];

	/**
	 * Un sender pertenece a un Trader
	 * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
	 */
	public function senders()
	{
		return $this->belongsTo('App\Trader', 'sender_id', 'id');
	}

	/**
	 * Un reciver pretenece a un Trader
	 * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
	 */
	public function recivers()
	{
		return $this->belongsTo('App\Trader', 'reciber_id', 'id');
	}

	/**
	 * Un encargo puede tener muchos trancitos
	 * @return \Illuminate\Database\Eloquent\Relations\HasMany
	 */
	public function transitos()
	{
		return $this->hasMany('App\Transito');
	}

	/**
	 * @return mixed
	 */
	public function scopeTest($query)
	{
		return $query->with(['transitos' => function($q){
			$q->orderBy('id', 'desc')->latest()->get();
		}]);
	}

	public function user()
	{
		return $this->belongsTo('App\User', 'user_id', 'id');
	}

}
