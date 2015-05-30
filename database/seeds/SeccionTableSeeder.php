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
			'name' => 'Presidencia'
		]);

		Seccion::create([
			'name' => 'Vice Presidencia'
		]);

		Seccion::create([
			'name' => 'Dirección'
		]);

		Seccion::create([
			'name' => 'Sub Dirección'
		]);

		Seccion::create([
			'name' => 'Gerencia'
		]);

		Seccion::create([
			'name' => 'Sub Gerencia'
		]);

		Seccion::create([
			'name' => 'Personal'
		]);

		Seccion::create([
			'name' => 'Auditoria'
		]);

		Seccion::create([
			'name' => 'Administración'
		]);

		Seccion::create([
			'name' => 'Oficina de Negocios'
		]);

		Seccion::create([
			'name' => 'Sección Administrativa'
		]);

		Seccion::create([
			'name' => 'Compras'
		]);

		Seccion::create([
			'name' => 'Contabilídad'
		]);

		Seccion::create([
			'name' => 'Asesoria Legal'
		]);

		Seccion::create([
			'name' => 'Sección de Caja'
		]);

		Seccion::create([
			'name' => 'Sección de Informatica'
		]);

		Seccion::create([
			'name' => 'Seguridad'
		]);

		Seccion::create([
			'name' => 'Fideicomisos'
		]);

		Seccion::create([
			'name' => 'Aseo y mensajeria'
		]);

		Seccion::create([
			'name' => 'Recuperaciones'
		]);

		Seccion::create([
			'name' => 'Comisión de Prestamos'
		]);

	}

}