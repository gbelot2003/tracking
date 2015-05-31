<?php namespace App;

use Illuminate\Database\Eloquent\Model;

class Trader extends Model {

	/**
	 *  The database table used by the model.
	 *
	 * @var string
	 */
	protected $table = 'traders';

	/**
	 * The attributes that are mass assignable.
	 *
	 * @var array
	 */
	protected $fillable = ['establecimiento_id', 'seccion_id', 'cargo_id', 'first_name', 'last_name', 'user_id', 'userstatus_id'];


	public function getFullNameAttribute()
	{
		return $this->attributes['first_name'] . ' ' . $this->attributes['last_name'];
	}

	/**
	 * Un trader puede tener a un usuario relacionado
	 * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
	 */
	public function user()
	{
		return $this->belongsToMany('App\User');
	}

	/**
	 * Un trader pertenece a un establecimiento
	 * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
	 */
	public function establecimiento()
	{
		return $this->belongsTo('App\Establecimiento');
	}

	/**
	 * Un trader pertenece a una sección
	 * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
	 */
	public function seccion()
	{
		return $this->belongsTo('App\Seccion');
	}

	/**
	 * @return \Illuminate\Database\Eloquent\Relations\HasMany
	 */
	public function sender()
	{
		return $this->hasMany('App\Shipment', 'sender_id', 'id');
	}

	/**
	 * @return \Illuminate\Database\Eloquent\Relations\HasMany
	 */
	public function reciver()
	{
		return $this->hasMany('App\Shipment', 'reciber_id', 'id');
	}

	/**
	 * Estado del perfil en cuestion
	 * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
	 * Solo deberian cambiarlo Administradores Generales del sistema
	 */
	public function estado()
	{
		return $this->belongsTo('App\Userstatus', 'userstatus_id', 'id');
	}

}
