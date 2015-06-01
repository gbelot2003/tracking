<?php

use Illuminate\Database\Seeder;

// composer require laracasts/testdummy
use Laracasts\TestDummy\Factory as TestDummy;

class EmpresaTableSeeder extends Seeder
{
    public function run()
    {
		\DB::table('empresas')->delete();

		\DB::table('empresas')->insert(array (
			0 =>
				array (
					'id' => 1,
					'name' => 'Unidos Express',
				),
			1 =>
				array (
					'id' => 2,
					'name' => 'Ficohsa',
				),
		));

    }
}
