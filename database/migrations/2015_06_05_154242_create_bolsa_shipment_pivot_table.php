<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateBolsaShipmentPivotTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('bolsa_shipment', function(Blueprint $table) {
            $table->integer('bolsa_id')->unsigned()->index();
            $table->foreign('bolsa_id')->references('id')->on('bolsas')->onDelete('cascade');
            $table->integer('shipment_id')->unsigned()->index();
            $table->foreign('shipment_id')->references('id')->on('shipments')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('bolsa_shipment');
    }
}
