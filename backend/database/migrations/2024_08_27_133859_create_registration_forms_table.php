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
            $table->foreignUuid('personal_data_id')->constrained('personal_data')->cascadeOnDelete();
            $table->foreignUuid('training_program_id')->constrained()->cascadeOnDelete();
            $table->string('learning_pattern');
            $table->boolean('is_willing_to_relocate');
            $table->boolean('compliance_agreement');
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
