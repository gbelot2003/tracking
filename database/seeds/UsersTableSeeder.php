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

class UsersTableSeeder extends Seeder{
    public function run(){
        DB::table('users')->delete();

        User::create([
            'name' => 'gbelot2003',
            'userstatuses_id' => 1,
			'email' => 'gbelot2003@hotmail.com',
            'password' => Hash::make('Luna0102'),
        ]);

		User::create([
			'name' => 'Departamento de Compras, Ficohsa Central',
			'userstatuses_id' => 1,
			'email' => 'melara@hotmail.com',
			'password' => Hash::make('Luna0102'),
		]);

		$user = User::find(1);
		$user->attachRole(1);

		$user = User::find(2);
		$user->attachRole(4);



	}
}
