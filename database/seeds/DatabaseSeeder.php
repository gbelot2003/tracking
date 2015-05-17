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

		$this->call('RoleTableSeeder');
		$this->command->info('Roles table seeded!');

		$this->call('UserstatusTableSeeder');
		$this->command->info('Userstatus table seeded!');

		$this->call('UsersTableSeeder');
		$this->command->info('Users table seeded!');

		$this->call('DepartmentTableSeeder');
		$this->command->info('Departments table seeded!');
	}

}
