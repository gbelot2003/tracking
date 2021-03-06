<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateShipmentsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('shipments', function(Blueprint $table)
		{
			$table->increments('id');
			$table->integer('code')->unsigned();
			$table->integer('sender_id')->unsigned();
			$table->integer('reciber_id')->unsigned();
			$table->integer('reciber_seccion')->unsigned();
			$table->integer('user_id')->unsigned()->index();
			$table->integer('estado_id')->unsigned();
			$table->integer('transito_id')->unsigned();
			$table->text('description');
			$table->string('firma')->nullable()->index();
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
		Schema::drop('shipments');
	}

}
