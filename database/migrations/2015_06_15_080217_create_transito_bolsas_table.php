<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTransitoBolsasTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('transito_bolsas', function(Blueprint $table)
		{
			$table->increments('id');
			$table->integer('bolsa_id')->unsigned()->index();
			$table->integer('estado_id')->unsigned()->index();
			$table->integer('establecimiento_id')->unsigned()->index();
			$table->integer('user_id')->unsigned();
			$table->text('details')->nullable();
			$table->string('firma')->nullable();
			$table->string('foto')->nullable();
			$table->timestamps();
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('transito_bolsas');
	}

}
