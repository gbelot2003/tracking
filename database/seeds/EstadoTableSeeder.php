<?php
/**
 * Created by PhpStorm.
 * User: ajax
 */
use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;
use App\Estado;

class EstadoTableSeeder extends Seeder
{
    public function run()
    {
		DB::table('estados')->delete();

		Estado::create([
			'name'			=> 'En Espera',
			'description'	=> 'La encomienda a sido creada y registrada en el sistema, pero no a ingresado a la linea de entragas'
		]);

		Estado::create([
			'name' 			=> 'Transito, regular',
			'description'	=> 'La encomienda a ingresado a la linea de entragas y esta en manos de la empresa de mensajeria'
		]);

		Estado::create([
			'name' 			=> 'Transito, Centro de acopio',
			'description'	=> 'La encomienda a ingresado a el centro de acopio descrito'
		]);

		Estado::create([
			'name'			=> 'Transito, en bolsa de transporte',
			'description'	=>	'El paquete a ingresado a una bolsa para su traslado a destinos posteriores o su entrega'
		]);

		Estado::create([
			'name'			=>  'Transito, presenta daños ligeros',
			'description'	=>	'La encomienda presenta algun tipo de daños'
		]);

		Estado::create([
			'name'			=>  'Transito, presenta daños graves',
			'description'	=>	'La encomienda presenta daños severos, sellos violentados, ruturas, contenido roto etc'
		]);

		Estado::create([
			'name'			=> 'Entragada a terceros',
			'description'	=>	'La encomienda a pasado a manos de terseras personas o empresas para su manejo y entrega'
		]);

		Estado::create([
			'name'			=>  'Extraviado',
			'description'	=>	'La encomienda se a extraviado en algun punto en la linea de transito'
		]);

		Estado::create([
			'name'			=>  'Robado',
			'description'	=>	'El paquete a sido robado.'
		]);

		Estado::create([
			'name'			=>  'Dañado por completo',
			'description'	=>	'El paquete a sido robado.'
		]);

		Estado::create([
			'name'			=> 'Entragado',
			'description'	=>	'La encomienda a sido entregada sin observaciones'
		]);

		Estado::create([
			'name'			=> 'Entragado con observaciones',
			'description'	=>	'La encomienda a sido entregada y hay observaciones en su entrega'
		]);

		Estado::create([
			'name'			=> 'Entregado a terceros, entrega final',
			'description'	=>	'Se entrega a otra empresa de mensajería o a personal autorizados por la empresa para entregar la encomienda en su destino. '
		]);

    }
}
