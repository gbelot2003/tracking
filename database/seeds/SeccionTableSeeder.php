<?php
/**
 * Created by PhpStorm.
 * User: ajax
 * Date: 02-16-15
 * Time: 02:01 AM
 */

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;
use App\Seccion;

class SeccionTableSeeder extends Seeder {
	public function run()
	{
		DB::table('seccions')->delete();

		Seccion::create([
			'name' => 'Oficina de Personal'
		]);

		Seccion::create([
			'name' => 'Auditoria'
		]);

		Seccion::create([
			'name' => 'Administración'
		]);

		Seccion::create([
			'name' => 'Presidencia'
		]);

		Seccion::create([
			'name' => 'Sub Dirección'
		]);

		Seccion::create([
			'name' => 'Oficina de Negocios'
		]);

		Seccion::create([
			'name' => 'Sección Administrativa'
		]);

		Seccion::create([
			'name' => 'Gerencia'
		]);

		Seccion::create([
			'name' => 'Oficina de Negocios'
		]);

		Seccion::create([
			'name' => 'Gerencia'
		]);

		Seccion::create([
			'name' => 'Oficina de Negocios'
		]);

	}

}