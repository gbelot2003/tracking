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
			'first_name' 			=> 'Luis',
			'last_name' 			=> 'Soliz',
		]);

		Trader::create([
			'establecimiento_id'	=> 2,
			'seccion_id'		 	=> 5,
			'first_name' 			=> 'Juan Alberto',
			'last_name' 			=> 'Mendieta'
		]);

		Trader::create([
			'establecimiento_id'	=> 8,
			'seccion_id'		 	=> 1,
			'first_name' 			=> 'Alberto',
			'last_name' 			=> 'Banegas'
		]);

		Trader::create([
			'establecimiento_id'	=> 7,
			'seccion_id'		 	=> 11,
			'first_name' 			=> 'Cesar',
			'last_name' 			=> 'Acosta'
		]);

		Trader::create([
			'establecimiento_id'	=> 7,
			'seccion_id'		 	=> 9,
			'first_name' 			=> 'Juan A',
			'last_name' 			=> 'Martinez Molina',
		]);

		Trader::create([
			'establecimiento_id'	=> 2,
			'seccion_id'		 	=> 7,
			'first_name' 			=> 'Jose Manuel',
			'last_name' 			=> 'Altruza'
		]);

		Trader::create([
			'establecimiento_id'	=> 6,
			'seccion_id'		 	=> 1,
			'first_name' 			=> 'Frank Antonio',
			'last_name' 			=> 'Melara Bustillo'
		]);

		Trader::create([
			'establecimiento_id'	=> 3,
			'seccion_id'		 	=> 3,
			'first_name' 			=> 'Jose Luis',
			'last_name' 			=> 'Obiedo Hernadez'
		]);

		Trader::create([
			'establecimiento_id'	=> 6,
			'seccion_id'		 	=> 3,
			'first_name' 			=> 'Hector Roberto',
			'last_name' 			=> 'Madrid Guido'
		]);

		Trader::create([
			'establecimiento_id'	=> 1,
			'seccion_id'		 	=> 6,
			'first_name' 			=> 'Luis Eduardo',
			'last_name' 			=> 'Majano Hernadez'
		]);
	}
}