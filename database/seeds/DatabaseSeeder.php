<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;

class DatabaseSeeder extends Seeder {

	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run()
	{
		Model::unguard();

		$this->call('AreasTableSeeder');
		$this->command->info('Areas table seeded!');

		$this->call('UserstatusesTableSeeder');
		$this->command->info('User Statuses table seeded!');

		$this->call('EstadoTableSeeder');
		$this->command->info('Estados table seeded!');

		$this->call('DepartamentoTableSeeder');
		$this->command->info('Departamentos table seeded!');

		$this->call('MunicipioTableSeeder');
		$this->command->info('Municipios table seeded!');

		$this->call('EstablecimientosTableSeeder');
		$this->command->info('Establecimientos table seeded!');

		$this->call('SeccionTableSeeder');
		$this->command->info('Seccions table seeded!');

		$this->call('TraderTableSeeder');
		$this->command->info('Sujetos table seeded!');

		$this->call('RoleTableSeeder');
		$this->command->info('Roles table seeded!');

		$this->call('UsersTableSeeder');
		$this->command->info('Users table seeded!');

		$this->call('ShipmentTableSeeder');
		$this->command->info('Shipments table seeded!');

		$this->call('TransitoTableSeeder');
		$this->command->info('Transitos table seeded!');


	}

}
