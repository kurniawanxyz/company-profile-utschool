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
        Schema::create('registration_forms', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->foreignUuid('batch_id')->constrained();
            $table->foreignUuid('sobat_school_id')->constrained()->cascadeOnDelete();
            $table->foreignUuid('learning_point_id')->constrained()->cascadeOnDelete();
            $table->enum('approval', ['approved', 'rejected'])->nullable();
            $table->boolean('is_willing_to_relocate');
            $table->string('full_name');
            $table->string('place_of_birth');
            $table->string('date_of_birth');
            $table->enum('gender', ['L', 'P']);
            $table->string('address');
            $table->string('telephone_number');
            $table->string('email');
            $table->string('id_card');
            $table->string('hobby');
            $table->enum('school_type', ['SMK', "SMA"]);
            $table->string('school_of_origin');
            $table->string('major');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('registration_forms');
    }
};
