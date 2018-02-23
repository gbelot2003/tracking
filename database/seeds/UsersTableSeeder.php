<?php

use Illuminate\Database\Seeder;
use App\User;
class UsersTableSeeder extends Seeder {

	/**
	 * Auto generated seed file
	 *
	 * @return void
	 */
	public function run()
	{
		\DB::table('users')->delete();
        
		\DB::table('users')->insert(array (
			0 => 
			array (
				'id' => 1,
				'userstatus_id' => 1,
				'name' => 'gbelot2003',
				'empresa_id' => 1,
				'establecimiento_id' => 153,
				'email' => 'gbelot2003@hotmail.com',
				'password' => '$2y$10$mDl.MkctMqXySPi81SJKU.S0WM9yCS4g007EmnwKxLzfF4QuCl4wm',
				'remember_token' => 'oSh2yfGFSEpdTxAGS7Ke6oxfySv6GS76dCrsQb81RkHwbUPKEirjqnq5iatJ',
				'created_at' => '2015-05-30 20:38:57',
				'updated_at' => '2015-07-04 11:10:34',
			),
			1 => 
			array (
				'id' => 2,
				'userstatus_id' => 1,
				'name' => 'Harold Rivera',
				'empresa_id' => 1,
				'establecimiento_id' => 107,
				'email' => 'hrivera@conectahn.com',
				'password' => '$2y$10$uHuDdWLi14zA2jzSkeMNFu5K3TKXTUuEdH7aebh98AUEVPE2FeWba',
				'remember_token' => 'OgHB1u0FEUS8TMKjzXxf50WZqI7TIciCpr8H237iqjIaQFEnuSIruYynnove',
				'created_at' => '2015-05-30 20:46:30',
				'updated_at' => '2015-07-04 17:44:01',
			),
        ));

		$user = new App\User();
		$user = User::find(1); $user->attachRole(1);
		$user = User::find(2); $user->attachRole(1);

	}

}
