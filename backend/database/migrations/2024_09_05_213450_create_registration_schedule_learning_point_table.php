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
        Schema::create('registration_schedule_learning_point', function (Blueprint $table) {
            $table->id();
            $table->foreignUuid('reg_sched_id')->constrained('registration_schedules')
                ->onDelete('cascade');

            $table->foreignUuid('learning_point_id')->constrained()
                ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('registration_schedule_learning_point');
    }
};
