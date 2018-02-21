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
					'name' => 'Empresa 1',
				),
			1 =>
				array (
					'id' => 2,
					'name' => 'Empresa 2',
				),
			3 =>
				array(
					'id' => 3,
					'name' => 'Empresa 3'
				)
		));

    }
}
