<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateToperatorsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('toperators', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->text('nama');
            $table->text('tps');
            $table->text('kec');
            $table->text('kel');
            $table->text('kectext');
            $table->text('keltext');
            $table->text('email');
            $table->text('pass');
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
        Schema::dropIfExists('toperators');
    }
}
