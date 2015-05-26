<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSujetosTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('sujetos', function(Blueprint $table)
		{
			$table->increments('id');
			$table->integer('establecimiento_id')->unsigned();
			$table->integer('seccion_id')->unsigned();
			$table->integer('cargo_id')->unsigned();
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
		Schema::drop('sujetos');
	}

}
