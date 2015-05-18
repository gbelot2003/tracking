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
			'establecimientos_id' => 2,
			'name' => 'Oficina de Personal'
		]);

		Seccion::create([
			'establecimientos_id' => 2,
			'name' => 'Auditoria'
		]);

		Seccion::create([
			'establecimientos_id' => 2,
			'name' => 'Administración'
		]);

		Seccion::create([
			'establecimientos_id' => 2,
			'name' => 'Presidencia'
		]);

		Seccion::create([
			'establecimientos_id' => 2,
			'name' => 'Sub Dirección'
		]);

		Seccion::create([
			'establecimientos_id' => 2,
			'name' => 'Oficina de Negocios'
		]);

		Seccion::create([
			'establecimientos_id' => 1,
			'name' => 'Sección Administrativa'
		]);

		Seccion::create([
			'establecimientos_id' => 3,
			'name' => 'Sección Administrativa'
		]);

		Seccion::create([
			'establecimientos_id' => 4,
			'name' => 'Sección Administrativa'
		]);

		Seccion::create([
			'establecimientos_id' => 5,
			'name' => 'Sección Administrativa'
		]);

		Seccion::create([
			'establecimientos_id' => 5,
			'name' => 'Gerencia'
		]);

		Seccion::create([
			'establecimientos_id' => 5,
			'name' => 'Oficina de Negocios'
		]);

		Seccion::create([
			'establecimientos_id' => 6,
			'name' => 'Gerencia'
		]);

		Seccion::create([
			'establecimientos_id' => 6,
			'name' => 'Oficina de Negocios'
		]);

	}

}