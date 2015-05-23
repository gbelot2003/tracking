<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTransitosTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('transitos', function(Blueprint $table)
		{
			$table->increments('id');
			$table->integer('shipment_id')->unsigned();
			$table->integer('estado_id')->unsigned();
			$table->text('details');
			$table->timestamps();
			$table->foreign('shipment_id')
				->reference('id')
				->on('shipments')
				->onDelete('cascade');
		});

		Schema::create('estados', function(Blueprint $table){
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
		Schema::drop('transitos');
		Schema::drop('estados');
	}

}
