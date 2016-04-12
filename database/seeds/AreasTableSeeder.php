<?php

use Illuminate\Database\Seeder;

class AreasTableSeeder extends Seeder {

	/**
	 * Auto generated seed file
	 *
	 * @return void
	 */
	public function run()
	{
		\DB::table('areas')->delete();
        
		\DB::table('areas')->insert(array (
			0 => 
			array (
				'id' => 1,
				'areas' => 'TGU',
			),
			1 => 
			array (
				'id' => 2,
				'areas' => 'SPS',
			),
		));
	}

}
