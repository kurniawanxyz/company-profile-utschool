<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('personal_data', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('full_name');
            $table->string('place_of_birth');
            $table->string('date_of_birth');
            $table->enum('gender', ['L', 'P']);
            $table->string('address');
            $table->string('telephone_number');
            $table->string('email');
            $table->string('id_card');
            $table->string('hobby');
            $table->enum('school_type', ['SMK', "SLTA"]);
            $table->string('school_of_origin');
            $table->string('major_name');
            $table->string('other_majors');
            $table->integer('avg_report_card');
            $table->integer('avg_math');
            $table->integer('number_of_siblings');
            $table->integer('order_in_family');
            $table->integer('youngest_sibling_age');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('personal_data');
    }
};
