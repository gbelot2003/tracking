<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddForeingKeyToEstablecimientosFromBolsasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('bolsas', function (Blueprint $table) {
            $table->index('establecimiento_envio_id');
            $table->index('establecimiento_recive_id');

            $table->foreign('establecimiento_envio_id')
                ->references('id')
                ->on('establecimientos');

            $table->foreign('establecimiento_recive_id')
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
        Schema::table('bolsas', function (Blueprint $table) {

            $table->dropForeign('establecimiento_envio_id');
            $table->dropForeign('establecimiento_recive_id');

            $table->dropIndex('establecimiento_envio_id');
            $table->dropIndex('establecimiento_recive_id');

        });
    }
}
