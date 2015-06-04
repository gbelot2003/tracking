<?php

use Illuminate\Database\Seeder;

class TransitosTableSeeder extends Seeder {

	/**
	 * Auto generated seed file
	 *
	 * @return void
	 */
	public function run()
	{
		\DB::table('transitos')->delete();
        
		\DB::table('transitos')->insert(array (
			0 => 
			array (
				'id' => 1,
				'shipment_id' => 1,
				'estado_id' => 2,
				'user_id' => 21,
				'details' => 'Sin detalles',
				'firma' => NULL,
				'foto' => NULL,
				'created_at' => '2015-06-04 09:07:06',
				'updated_at' => '2015-06-04 09:07:06',
			),
			1 => 
			array (
				'id' => 2,
				'shipment_id' => 2,
				'estado_id' => 2,
				'user_id' => 21,
				'details' => 'Sin detalles',
				'firma' => NULL,
				'foto' => NULL,
				'created_at' => '2015-06-04 09:07:56',
				'updated_at' => '2015-06-04 09:07:56',
			),
			2 => 
			array (
				'id' => 3,
				'shipment_id' => 3,
				'estado_id' => 2,
				'user_id' => 21,
				'details' => 'Sin detalles',
				'firma' => NULL,
				'foto' => NULL,
				'created_at' => '2015-06-04 09:09:16',
				'updated_at' => '2015-06-04 09:09:16',
			),
			3 => 
			array (
				'id' => 4,
				'shipment_id' => 3,
				'estado_id' => 2,
				'user_id' => 32,
				'details' => 'Todo Correcto',
				'firma' => NULL,
				'foto' => NULL,
				'created_at' => '2015-06-04 09:10:54',
				'updated_at' => '2015-06-04 09:10:54',
			),
		));
	}

}
