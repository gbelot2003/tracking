<?php
/**
 * Created by PhpStorm.
 * User: ajax
 * Date: 02-16-15
 * Time: 02:01 AM
 */

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;
use App\Cargo;

class CargoTableSeeder extends Seeder{

	public function run(){
		DB::table('cargos')->delete();

		Cargo::create([
			'name' => 'Director'
		]);

		Cargo::create([
			'name' => 'sub director'
		]);

		Cargo::create([
			'name' => 'Administrador'
		]);

		Cargo::create([
			'name' => 'Gerente de sección'
		]);

		Cargo::create([
			'name' => 'Gerente General'
		]);

		Cargo::create([
			'name' => 'Sub Gerente'
		]);

		Cargo::create([
			'name' => 'Contador'
		]);

		Cargo::create([
			'name' => 'Fiscal'
		]);

		Cargo::create([
			'name' => 'Auditor'
		]);

		Cargo::create([
			'name' => 'Secretaria'
		]);

		Cargo::create([
			'name' => 'Auxiliar'
		]);

		Cargo::create([
			'name' => 'Cajer@'
		]);

		Cargo::create([
			'name' => 'Conserje'
		]);
	}

}