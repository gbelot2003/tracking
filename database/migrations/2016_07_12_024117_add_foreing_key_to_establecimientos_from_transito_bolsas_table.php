<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddForeingKeyToEstablecimientosFromTransitoBolsasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('transito_bolsas', function (Blueprint $table) {
            $table->foreign('establecimiento_id')
                ->references('id')
                ->on('establecimientos');
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
            $table->dropForeign('establecimiento_id');
        });
    }
}
