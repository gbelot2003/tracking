<?php
/**
 * Created by PhpStorm.
 * User: ajax
 */
use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;
use App\Trader;
/** Hay que modificar el seeder */
class TraderTableSeeder extends Seeder{

	public function run()
	{
		DB::table('traders')->delete();

		Trader::create([
			'establecimiento_id'	=> 2,
			'seccion_id'		 	=> 3,
			'cargo_id'			 	=> 2,
			'first_name' 			=> 'Luis',
			'last_name' 			=> 'Soliz',
			'user_id' 				=> 5
		]);

		Trader::create([
			'establecimiento_id'	=> 2,
			'seccion_id'		 	=> 5,
			'cargo_id'			 	=> 15,
			'first_name' 			=> 'Juan Alberto',
			'last_name' 			=> 'Mendieta'
		]);

		Trader::create([
			'establecimiento_id'	=> 8,
			'seccion_id'		 	=> 1,
			'cargo_id'			 	=> 14,
			'first_name' 			=> 'Alberto',
			'last_name' 			=> 'Banegas'
		]);

		Trader::create([
			'establecimiento_id'	=> 7,
			'seccion_id'		 	=> 11,
			'cargo_id'			 	=> 14,
			'first_name' 			=> 'Cesar',
			'last_name' 			=> 'Acosta'
		]);

		Trader::create([
			'establecimiento_id'	=> 7,
			'seccion_id'		 	=> 9,
			'cargo_id'			 	=> 4,
			'first_name' 			=> 'Juan A',
			'last_name' 			=> 'Martinez Molina',
			'user_id'				=> 4
		]);

		Trader::create([
			'establecimiento_id'	=> 2,
			'seccion_id'		 	=> 7,
			'cargo_id'			 	=> 15,
			'first_name' 			=> 'Jose Manuel',
			'last_name' 			=> 'Altruza'
		]);

		Trader::create([
			'establecimiento_id'	=> 6,
			'seccion_id'		 	=> 1,
			'cargo_id'			 	=> 5,
			'first_name' 			=> 'Frank Antonio',
			'last_name' 			=> 'Melara Bustillo'
		]);

		Trader::create([
			'establecimiento_id'	=> 3,
			'seccion_id'		 	=> 3,
			'cargo_id'			 	=> 14,
			'first_name' 			=> 'Jose Luis',
			'last_name' 			=> 'Obiedo Hernadez'
		]);

		Trader::create([
			'establecimiento_id'	=> 6,
			'seccion_id'		 	=> 3,
			'cargo_id'			 	=> 5,
			'first_name' 			=> 'Hector Roberto',
			'last_name' 			=> 'Madrid Guido'
		]);

		Trader::create([
			'establecimiento_id'	=> 1,
			'seccion_id'		 	=> 6,
			'cargo_id'			 	=> 15,
			'first_name' 			=> 'Luis Eduardo',
			'last_name' 			=> 'Majano Hernadez'
		]);
	}
}