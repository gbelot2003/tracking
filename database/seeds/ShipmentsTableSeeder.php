<?php

use Illuminate\Database\Seeder;

class ShipmentsTableSeeder extends Seeder {

	/**
	 * Auto generated seed file
	 *
	 * @return void
	 */
	public function run()
	{
		\DB::table('shipments')->delete();
        
		\DB::table('shipments')->insert(array (
			0 => 
			array (
				'id' => 1,
				'code' => 10000001,
				'sender_id' => 6,
				'reciber_id' => 8,
				'reciber_seccion' => 3,
				'description' => 'Nada en particular',
				'created_at' => '2015-06-04 09:07:06',
				'updated_at' => '2015-06-04 09:07:06',
			),
			1 => 
			array (
				'id' => 2,
				'code' => 10000002,
				'sender_id' => 4,
				'reciber_id' => 10,
				'reciber_seccion' => 1,
				'description' => '',
				'created_at' => '2015-06-04 09:07:56',
				'updated_at' => '2015-06-04 09:07:56',
			),
			2 => 
			array (
				'id' => 3,
				'code' => 10000003,
				'sender_id' => 7,
				'reciber_id' => 6,
				'reciber_seccion' => 2,
				'description' => '',
				'created_at' => '2015-06-04 09:09:16',
				'updated_at' => '2015-06-04 09:09:16',
			),
		));
	}

}
