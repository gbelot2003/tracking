<?php
/**
 * Created by PhpStorm.
 * User: ajax
 * Date: 02-16-15
 * Time: 02:01 AM
 */
use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;
use App\User;
/** Hay que modificar el seeder */
class UsersTableSeeder extends Seeder{
    public function run(){
        DB::table('users')->delete();

        User::create([
			'userstatus_id' => 1,
			'name' => 'gbelot2003',
            'first_name' => 'Gerardo A',
			'last_name' => 'Belot',
			'email' => 'gbelot2003@hotmail.com',
            'password' => Hash::make('Luna0102'),
        ]);

		User::create([
			'userstatus_id' => 1,
			'name' => 'amelara',
			'first_name' => 'Antonio H',
			'last_name' => 'Melara Fortin',
			'email' => 'amelara@hotmail.com',
			'password' => Hash::make('Luna0102'),
		]);

		$user = User::find(1);
		$user->attachRole(1);

		$user = User::find(2);
		$user->attachRole(4);



	}
}
