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

		Schema::create('empresas', function(Blueprint $table)
		{
			$table->increments('id');
			$table->string('name');
		});

		Schema::create('establecimientos', function(Blueprint $table)
		{
			$table->increments('id');
			$table->integer('empresa_id')->index()->unsigned();
			$table->integer('departamento_id')->unsigned();
			$table->integer('municipio_id')->unsigned();
			$table->string('name');
			$table->text('address')->nullable();
			$table->foreign('empresa_id')
				->references('id')
				->on('empresas')
				->onDelete('cascade');
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
		Schema::drop('empresas');
	}

}
