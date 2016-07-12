<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddForeingKeyToTransitosBolsasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('transito_bolsas', function (Blueprint $table) {
            $table->foreign('bolsa_id')
                ->references('id')
                ->on('bolsas')
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
            $table->dropForeign('bolsa_id');
            $table->dropIndex('bolsa_id');
        });
    }
}
