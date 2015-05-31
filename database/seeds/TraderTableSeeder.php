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
			'userstatus_id'			=> 1
		]);

		Trader::create([
			'establecimiento_id'	=> 2,
			'seccion_id'		 	=> 5,
			'first_name' 			=> 'Juan Alberto',
			'last_name' 			=> 'Mendieta',
			'userstatus_id'			=> 1

		]);

		Trader::create([
			'establecimiento_id'	=> 8,
			'seccion_id'		 	=> 1,
			'first_name' 			=> 'Alberto',
			'last_name' 			=> 'Banegas',
			'userstatus_id'			=> 1

		]);

		Trader::create([
			'establecimiento_id'	=> 7,
			'seccion_id'		 	=> 11,
			'first_name' 			=> 'Cesar',
			'last_name' 			=> 'Acosta',
			'userstatus_id'			=> 1

		]);

		Trader::create([
			'establecimiento_id'	=> 7,
			'seccion_id'		 	=> 9,
			'first_name' 			=> 'Juan A',
			'last_name' 			=> 'Martinez Molina',
			'userstatus_id'			=> 1

		]);

		Trader::create([
			'establecimiento_id'	=> 2,
			'seccion_id'		 	=> 7,
			'first_name' 			=> 'Jose Manuel',
			'last_name' 			=> 'Altruza',
			'userstatus_id'			=> 1

		]);

		Trader::create([
			'establecimiento_id'	=> 6,
			'seccion_id'		 	=> 1,
			'first_name' 			=> 'Frank Antonio',
			'last_name' 			=> 'Melara Bustillo',
			'userstatus_id'			=> 1

		]);

		Trader::create([
			'establecimiento_id'	=> 3,
			'seccion_id'		 	=> 3,
			'first_name' 			=> 'Jose Luis',
			'last_name' 			=> 'Obiedo Hernadez',
			'userstatus_id'			=> 1

		]);

		Trader::create([
			'establecimiento_id'	=> 6,
			'seccion_id'		 	=> 3,
			'first_name' 			=> 'Hector Roberto',
			'last_name' 			=> 'Madrid Guido',
			'userstatus_id'			=> 1

		]);

		Trader::create([
			'establecimiento_id'	=> 1,
			'seccion_id'		 	=> 6,
			'first_name' 			=> 'Luis Eduardo',
			'last_name' 			=> 'Majano Hernadez',
			'userstatus_id'			=> 1

		]);
	}
}