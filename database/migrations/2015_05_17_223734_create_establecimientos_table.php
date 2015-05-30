<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateEstablecimientosTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('establecimientos', function(Blueprint $table)
		{
			$table->increments('id');
			$table->integer('departamento_id')->unsigned();
			$table->integer('municipio_id')->unsigned();
			$table->string('name');
			$table->text('address')->nullable();
		});

		Schema::create('testablecimientos', function(Blueprint $table){
			$table->increments('id');
			$table->string('name');
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('establecimientos');
	}

}
