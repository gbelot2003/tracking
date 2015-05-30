<?php namespace App;

use Illuminate\Auth\Authenticatable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Auth\Passwords\CanResetPassword;
use Illuminate\Contracts\Auth\Authenticatable as AuthenticatableContract;
use Illuminate\Contracts\Auth\CanResetPassword as CanResetPasswordContract;
use Zizaco\Entrust\Traits\EntrustUserTrait;

class User extends Model implements AuthenticatableContract, CanResetPasswordContract {

	use Authenticatable, CanResetPassword, EntrustUserTrait;

	/**
	 * The database table used by the model.
	 *
	 * @var string
	 */
	protected $table = 'users';

	/**
	 * The attributes that are mass assignable.
	 *
	 * @var array
	 */
	protected $fillable = ['name', 'userstatuses_id', 'employee_name', 'email', 'password'];

	/**
	 * The attributes excluded from the model's JSON form.
	 *
	 * @var array
	 */
	protected $hidden = ['password', 'remember_token'];

	/**
	 * Devolver listado de roles por usuario
	 * @return mixed
	 */
	public function getRolesListsAttribute()
	{
		return $this->roles->lists('id');
	}

	/**
	 * Estado del usuario en cuestion
	 * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
	 * Solo deberian cambiarlo Administradores Generales del sistema
	 */
	public function estado()
	{
		return $this->belongsTo('App\Userstatus');
	}

	/**
	 * Un usuario puede tener varios usuarios traders
	 * @return \Illuminate\Database\Eloquent\Relations\HasMany
	 */
	public function traders()
	{
		return $this->belongsToMany('App\Trader');
	}

	/**
	 * Un usuarios puede crear varias encomiendas
	 * @return \Illuminate\Database\Eloquent\Relations\HasMany
	 */
	public function shipments()
	{
		return $this->hasMany('App\Shipment');
	}

	/**
	 * Obtener listado de traders relacionados
	 * @return mixed
	 */
	public function getTradersListAttribute()
	{
		// Llamamos un listado de registros relacionados
		return $this->traders->lists('id');
	}

	/**
	 * Un usuario puede registrar varios transitos
	 * @return \Illuminate\Database\Eloquent\Relations\HasMany
	 */
	public function transitos()
	{
		return $this->hasMany('App\Transito');
	}

	/**
	 * Un usuario puede estar asignado a una sección en particular (Edificio)
	 * @return \Illuminate\Database\Eloquent\Relations\hasOne
	 */
	public function seccion()
	{
		return $this->hasOne('App\Seccion', 'seccion_id', 'id');
	}

	/**
	 * Un usuario esta en una area
	 * @return \Illuminate\Database\Eloquent\Relations\belongsTo
	 */
	public function area()
	{
		return $this->belongsTo('App\Area', 'area_id', 'id');
	}
}
