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
        Schema::create('health_information', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->foreignUuid('registration_form_id')->constrained()->cascadeOnDelete();
            $table->text('past_illnesses')->nullable();
            $table->string('weight');
            $table->string('height');
            $table->boolean('wear_glasses');
            $table->boolean('color_blindness');
            $table->string('address_and_phone_number');
            $table->string('resident_photo');
            $table->string('diploma_photo');
            $table->string('family_card_photo');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('health_information');
    }
};
