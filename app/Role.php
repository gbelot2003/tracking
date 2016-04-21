<?php namespace App;

use Zizaco\Entrust\EntrustRole;

class Role extends EntrustRole {

	/**
	 * The attributes that are mass assignable.
	 *
	 * @var array
	 */
	protected $fillable = ['name', 'display_name', 'description'];

	public function getPermsListsAttribute()
	{
		return $this->perms->lists('id');
	}

    /**
     * return related data from users
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function users()
    {
        return $this->belongsToMany('App\User');
    }
}
