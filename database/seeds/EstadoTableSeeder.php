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
			'name' 			=> 'En Transito, en buen estado',
			'description'	=> 'La encomienda a ingresado a la linea de entragas y esta en manos de la empresa de mensajeria'
		]);

		Estado::create([
			'name'			=>  'En transito, presenta daños ligeros',
			'description'	=>	'La encomienda presenta algun tipo de daños'
		]);

		Estado::create([
			'name'			=>  'En transito, presenta daños graves',
			'description'	=>	'La encomienda presenta daños severos, sellos violentados, ruturas, contenido roto etc'
		]);

		Estado::create([
			'name'			=> 'Entragada a terceros',
			'description'	=>	'La encomienda a pasado a manos de terseras personas o empresas para su manejo y entrega'
		]);

		Estado::create([
			'name'			=>  'En Transito, Extraviado',
			'description'	=>	'La encomienda se a extraviado en algun punto en la linea de transito'
		]);

		Estado::create([
			'name'			=>  'Extraviado, Irrecuperable',
			'description'	=>	'La encomienda se a extraviado por causas mayores(desastre natural, robo, hurto etc) y es imposible de recuperar.'
		]);

		Estado::create([
			'name'			=> 'Entraga Finalizada',
			'description'	=>	'La encomienda a sido entregada'
		]);

		Estado::create([
			'name'			=> 'Entraga Finalizada con observaciones',
			'description'	=>	'La encomienda a sido entregada y hay observaciones en su entrega'
		]);
    }
}
