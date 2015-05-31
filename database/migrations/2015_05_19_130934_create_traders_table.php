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
			$table->string('first_name');
			$table->string('last_name');
			$table->integer('userstatus_id');

			$table->timestamps(); // Fechas de creaccion y edición
		});

		Schema::create('trader_user', function(Blueprint $table)
		{
			$table->integer('trader_id')->unsigned()->index();
			$table->foreign('trader_id')->references('id')->on('traders')->onDelete('cascade');
			$table->integer('user_id')->unsigned()->index();
			$table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('trader_user');
		Schema::drop('traders');
	}

}
