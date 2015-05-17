<?php
/**
 * Created by PhpStorm.
 * User: ajax
 * Date: 02-16-15
 * Time: 02:01 AM
 */
use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;
use App\Role;

class RoleTableSeeder extends Seeder{
	public function run(){
		DB::table('roles')->delete();

		Role::create([
			'name' => 'owner',
			'display_name' => 'Super Administrador',
			'description' => 'Rol administrador general, acceso total administrativo',
		]);

		Role::create([
			'name' => 'admin',
			'display_name' => 'Administrador',
			'description' => 'Rol administrador general, acceso administrativo',
		]);

		Role::create([
			'name' => 'currier',
			'display_name' => 'Currier de Mensageria',
			'description' => 'Rol administrador, acceso a formularios de envio y distribución',
		]);

		Role::create([
			'name' => 'cliente',
			'display_name' => 'cliente departamental',
			'description' => 'Rol cliente, acceso a listados de envio y distribución propios',
		]);

	}
}
