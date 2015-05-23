<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateEstadosMigration extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::table('estados', function(Blueprint $table)
		{
			$table->increments('id');
			$table->string('name');
			$table->text('description');
		});

	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::table('estados', function(Blueprint $table)
		{
			Schema::drop('estados');
		});
	}

}
