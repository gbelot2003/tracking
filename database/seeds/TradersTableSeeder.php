<?php

use Illuminate\Database\Seeder;

class TradersTableSeeder extends Seeder {

	/**
	 * Auto generated seed file
	 *
	 * @return void
	 */
	public function run()
	{
		\DB::table('traders')->delete();
        
		\DB::table('traders')->insert(array (
			0 => 
			array (
				'id' => 1,
				'establecimiento_id' => 2,
				'seccion_id' => 3,
				'name' => 'Luis Soliz',
				
				'userstatus_id' => 1,
				'created_at' => '2015-06-11 04:26:30',
				'updated_at' => '2015-06-11 04:26:30',
			),
			1 => 
			array (
				'id' => 2,
				'establecimiento_id' => 2,
				'seccion_id' => 5,
				'name' => 'Juan Alberto Mendieta',
				
				'userstatus_id' => 1,
				'created_at' => '2015-06-11 04:26:30',
				'updated_at' => '2015-06-11 04:26:30',
			),
			2 => 
			array (
				'id' => 3,
				'establecimiento_id' => 8,
				'seccion_id' => 1,
				'name' => 'Alberto Banegas',
				
				'userstatus_id' => 1,
				'created_at' => '2015-06-11 04:26:30',
				'updated_at' => '2015-06-11 04:26:30',
			),
			3 => 
			array (
				'id' => 4,
				'establecimiento_id' => 7,
				'seccion_id' => 11,
				'name' => 'Cesar Acosta',
				
				'userstatus_id' => 1,
				'created_at' => '2015-06-11 04:26:30',
				'updated_at' => '2015-06-11 04:26:30',
			),
			4 => 
			array (
				'id' => 5,
				'establecimiento_id' => 7,
				'seccion_id' => 9,
				'name' => 'Juan A Martinez Molina',
				
				'userstatus_id' => 1,
				'created_at' => '2015-06-11 04:26:30',
				'updated_at' => '2015-06-11 04:26:30',
			),
			5 => 
			array (
				'id' => 6,
				'establecimiento_id' => 2,
				'seccion_id' => 7,
				'name' => 'Jose Manuel Altruza',
				
				'userstatus_id' => 1,
				'created_at' => '2015-06-11 04:26:30',
				'updated_at' => '2015-06-11 04:26:30',
			),
			6 => 
			array (
				'id' => 7,
				'establecimiento_id' => 6,
				'seccion_id' => 1,
				'name' => 'Frank Antonio Melara Bustillo',
				
				'userstatus_id' => 1,
				'created_at' => '2015-06-11 04:26:30',
				'updated_at' => '2015-06-11 04:26:30',
			),
			7 => 
			array (
				'id' => 8,
				'establecimiento_id' => 3,
				'seccion_id' => 3,
				'name' => 'Jose Luis Obiedo Hernadez',
				
				'userstatus_id' => 1,
				'created_at' => '2015-06-11 04:26:30',
				'updated_at' => '2015-06-11 04:26:30',
			),
			8 => 
			array (
				'id' => 9,
				'establecimiento_id' => 6,
				'seccion_id' => 3,
				'name' => 'Hector Roberto Madrid Guido',
				
				'userstatus_id' => 1,
				'created_at' => '2015-06-11 04:26:30',
				'updated_at' => '2015-06-11 04:26:30',
			),
			9 => 
			array (
				'id' => 10,
				'establecimiento_id' => 1,
				'seccion_id' => 6,
				'name' => 'Luis Eduardo Majano Hernadez',
				
				'userstatus_id' => 1,
				'created_at' => '2015-06-11 04:26:30',
				'updated_at' => '2015-06-11 04:26:30',
			),
			10 => 
			array (
				'id' => 11,
				'establecimiento_id' => 156,
				'seccion_id' => 19,
				'name' => 'Hector Antonio Lainez Laitano',
				
				'userstatus_id' => 1,
				'created_at' => '2015-06-11 04:38:31',
				'updated_at' => '2015-06-11 04:38:31',
			),
		));
	}

}
