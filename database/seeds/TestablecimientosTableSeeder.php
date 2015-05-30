<?php

use Illuminate\Database\Seeder;

class TestablecimientosTableSeeder extends Seeder {

	/**
	 * Auto generated seed file
	 *
	 * @return void
	 */
	public function run()
	{
		\DB::table('testablecimientos')->delete();
        
		\DB::table('testablecimientos')->insert(array (
			0 => 
			array (
				'id' => 1,
				'name' => 'Empresa Cliente',
			),
			1 => 
			array (
				'id' => 2,
				'name' => 'Administración Currier',
			),
		));
	}

}
