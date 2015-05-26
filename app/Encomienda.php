<?php namespace App;

use Illuminate\Database\Eloquent\Model;

class Encomienda extends Model {

	/**
	 *  The database table used by the model.
	 *
	 * @var string
	 */
	protected $table = 'Encomiendas';

	/**
	 * The attributes that are mass assignable.
	 *
	 * @var array
	 */
	protected $fillable = [
		'seder_id',
		'destinatari_id',
		'estadopaquete_id',
		'user_id',
		'descripcion'
	];

	/**
	 * Una Encomienda puede tener un sender (trader 1)
	 * @return mixed
	 */
	public function senders()
	{
		return $this->sender('App\Trader');
	}

	/**
	 * Una encomienda puede tener un destinatari
	 * @return mixed
	 */
	public function destinatari()
	{
		return $this->destinatari('App\Trader');
	}


	/**
	 * Una Encomienda puede tener a un usuario relacionado
	 * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
	 */
	public function user()
	{
		return $this->belongsTo('App\User');
	}

}
