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
		return $this->hasMany('App\Trader');
	}
}
