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
		factory(App\Transito::class, 4000)->create();
	}

}
