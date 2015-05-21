<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateEncomiendasTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('encomiendas', function(Blueprint $table)
		{
			$table->increments('id');
			$table->integer('seder_id')->unsigned();
			$table->integer('destinatari_id')->unsigned();
			$table->integer('estadopaquete_id')->unsigned();
			$table->integer('user_id')->unsigned();
			$table->text('descripcion');
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
		Schema::drop('encomiendas');
	}

}
