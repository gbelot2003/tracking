<?php
/**
 * Created by PhpStorm.
 * User: ajax
 */
use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;
use App\Transito;

class TransitoTableSeeder extends Seeder
{
    public function run()
    {
		DB::table('transitos')->delete();

		Transito::create([
			'shipment_id' 	=> 1,
			'estado_id' 	=> 1,
			'seccion_id' 		=> 1,
			'user_id' 		=> 1,
			'details' 		=> 'Sin detalles'
		]);

		Transito::create([
			'shipment_id' 	=> 2,
			'estado_id' 	=> 1,
			'seccion_id' 		=> 1,
			'user_id' 		=> 1,
			'details' 		=> 'Sin detalles'
		]);

		Transito::create([
			'shipment_id' 	=> 3,
			'estado_id' 	=> 1,
			'seccion_id' 		=> 1,
			'user_id' 		=> 1,
			'details' 		=> 'Sin detalles'
		]);

		Transito::create([
			'shipment_id' 	=> 4,
			'estado_id' 	=> 1,
			'seccion_id' 		=> 1,
			'user_id' 		=> 1,
			'details' 		=> 'Sin detalles'
		]);

		Transito::create([
			'shipment_id' 	=> 5,
			'estado_id' 	=> 1,
			'seccion_id' 		=> 1,
			'user_id' 		=> 1,
			'details' 		=> 'Sin detalles'
		]);

		Transito::create([
			'shipment_id' 	=> 6,
			'estado_id' 	=> 1,
			'seccion_id' 		=> 1,
			'user_id' 		=> 1,
			'details' 		=> 'Sin detalles'
		]);

		Transito::create([
			'shipment_id' 	=> 7,
			'estado_id' 	=> 1,
			'seccion_id' 		=> 1,
			'user_id' 		=> 1,
			'details' 		=> 'Sin detalles'
		]);

		Transito::create([
			'shipment_id' 	=> 8,
			'estado_id' 	=> 1,
			'seccion_id' 		=> 1,
			'user_id' 		=> 1,
			'details' 		=> 'Sin detalles'
		]);

		Transito::create([
			'shipment_id' 	=> 8,
			'estado_id' 	=> 2,
			'seccion_id' 		=> 1,
			'user_id' 		=> 1,
			'details' 		=> 'Sin detalles'
		]);
	}
}
