<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTradersTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('traders', function(Blueprint $table)
		{
			$table->increments('id');
			$table->integer('establecimiento_id')->unsigned();
			$table->integer('seccion_id')->unsigned();
			$table->integer('cargo_id')->unsigned();
			$table->string('first_name');
			$table->string('last_name');
			$table->integer('user_id')->unsigned()->nullable(); //registro de usuario relacionado a los traders
			$table->timestamps(); // Fechas de creaccion y edición
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('traders');
	}

}
