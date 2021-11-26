<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('firstname');
            $table->string('othernames')->nullable();
            $table->string('lastname');
            $table->string('mobile_number')->nullable();
            $table->string('sex');
            $table->string('client_number');
            $table->unsignedInteger('number_of_cuts')->default(0);
            $table->unsignedInteger('cut_status')->default(0); //0 for not free 1 for free cut
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
        Schema::dropIfExists('users');
    }
}
