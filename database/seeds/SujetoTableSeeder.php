<?php
/**
 * Created by PhpStorm.
 * User: ajax
 * Date: 02-16-15
 * Time: 02:01 AM
 */

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;
use App\Sujeto;

class SujetoTableSeeder extends Seeder{

	public function run(){
		DB::table('sujetos')->delete();

		Sujeto::create([
			'establecimiento_id' => 2,
			'seccion_id' => '1',
			'name' => 'Antonio Melara'
		]);

		Sujeto::create([
			'establecimiento_id' => 3,
			'seccion_id' => 8,
			'name' => 'Luis Bustillo'
		]);

		Sujeto::create([
			'establecimiento_id' => 5,
			'seccion_id' => 12,
			'name' => 'Dennis Milla'
		]);
	}

}