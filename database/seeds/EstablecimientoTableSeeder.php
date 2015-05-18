<?php
/**
 * Created by PhpStorm.
 * User: ajax
 * Date: 02-16-15
 * Time: 02:01 AM
 */
use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;
use App\Establecimiento;

class EstablecimientoTableSeeder extends Seeder {
	public function run()
	{

		DB::table('establecimientos')->delete();

		Establecimiento::create([
			'municipios_id' => '110',
			'name' => 'Kiosco Mall Las Cascadas'
		]);

		Establecimiento::create([
			'municipios_id' => '110',
			'name' => 'Edificio Principal, Miraflores'
		]);

		Establecimiento::create([
			'municipios_id' => '110',
			'name' => 'Sucursal La Colonia No. 1'
		]);


		Establecimiento::create([
			'municipios_id' => '110',
			'name' => 'Sucursal La Colonia No. 2'
		]);

		Establecimiento::create([
			'municipios_id' => '110',
			'name' => 'Sucursal La Colonia No. 5'
		]);

		Establecimiento::create([
			'municipios_id' => '110',
			'name' => 'Sucursal Parque Central'
		]);

		Establecimiento::create([
			'municipios_id' => '110',
			'name' => 'Sucursal Edificio Midence'
		]);

		Establecimiento::create([
			'municipios_id' => '110',
			'name' => 'Sucursal Calle Peatonal'
		]);
	}
}