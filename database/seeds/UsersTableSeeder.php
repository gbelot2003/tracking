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

		User::create([
			'userstatus_id' => 1,
			'name' => 'jmelendez',
			'first_name' => 'Julio',
			'last_name' => 'Melendez Caceres',
			'email' => 'jmelendez@hotmail.com',
			'password' => Hash::make('Luna0102'),
		]);

		User::create([
			'userstatus_id' => 1,
			'name' => 'fmaradiaga',
			'first_name' => 'Fernando',
			'last_name' => 'Maradiaga',
			'email' => 'fmaradiaga@hotmail.com',
			'password' => Hash::make('Luna0102'),
		]);

		User::create([
			'userstatus_id' => 1,
			'name' => 'lsoliz',
			'first_name' => 'Luis A',
			'last_name' => 'Soliz Mendieta',
			'email' => 'lsoliz@hotmail.com',
			'password' => Hash::make('Luna0102'),
		]);

		User::create([
			'userstatus_id' => 1,
			'name' => 'jmartinez',
			'first_name' => 'Juan A',
			'last_name' => 'Martinez Molina',
			'email' => 'jmartinez@hotmail.com',
			'password' => Hash::make('Luna0102'),
		]);

		$user = User::find(1);
		$user->attachRole(1);

		$user = User::find(2);
		$user->attachRole(2);

		$user = User::find(3);
		$user->attachRole(3);

		$user = User::find(4);
		$user->attachRole(4);

		$user = User::find(5);
		$user->attachRole(5);

		$user = User::find(6);
		$user->attachRole(5);
	}
}
