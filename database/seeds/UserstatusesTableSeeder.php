<?php
/**
 * Created by PhpStorm.
 * User: ajax
 * Date: 02-16-15
 * Time: 02:01 AM
 */
use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;
use App\Userstatus;

class UserstatusTableSeeder extends Seeder{
	public function run(){
		DB::table('userstatuses')->delete();

		Userstatus::create([
			'name' => 'Activo',
		]);


		Userstatus::create([
			'name' => 'Desactivado',
		]);


	}
}
