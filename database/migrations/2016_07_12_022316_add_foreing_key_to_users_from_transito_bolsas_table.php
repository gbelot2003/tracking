<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddForeingKeyToUsersFromTransitoBolsasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('transito_bolsas', function (Blueprint $table) {
            $table->index('user_id');

            $table->foreign('user_id')
                ->references('id')
                ->on('users')
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
        Schema::table('transito_bolsas', function (Blueprint $table) {
            $table->dropForeign('user_id');
            $table->dropIndex('user_id');
        });
    }
}
