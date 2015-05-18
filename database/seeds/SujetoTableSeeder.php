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
			'establecimientos_id' => 2,
			'seccions_id' => '1',
			'cargos_id' => '6',
			'name' => 'Antonio Melara'
		]);

		Sujeto::create([
			'establecimientos_id' => 3,
			'seccions_id' => 8,
			'cargos_id' => 6,
			'name' => 'Luis Bustillo'
		]);

		Sujeto::create([
			'establecimientos_id' => 5,
			'seccions_id' => 12,
			'cargos_id' => 6,
			'name' => 'Dennis Milla'
		]);
	}

}