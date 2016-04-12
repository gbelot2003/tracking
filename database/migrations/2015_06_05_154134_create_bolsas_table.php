<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateBolsasTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('bolsas', function(Blueprint $table)
		{
			$table->increments('id');
			$table->integer('code')->unsigned();
			$table->integer('establecimiento_envio_id')->unsigned();
			$table->integer('establecimiento_recive_id')->unsigned();
			$table->integer('estado_id')->unsigned();
			$table->integer('user_id')->unsigned()->index();
			$table->string('firma')->nullable;
			$table->text('details')->nullable;
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
		Schema::drop('bolsas');
	}

}
