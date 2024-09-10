<?php

namespace Database\Seeders;

use App\Models\Batch;
use App\Models\TrainingProgram;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class BatchSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $training_program = ['mekanik', 'operator', 'IT Programmer'];

        Batch::create([
            'number' => 35,
            'training_program_id' => TrainingProgram::where('name', "LIKE", '%'. $training_program[0] .'%')->first()->id
        ]);
        Batch::create([
            'number' => 35,
            'training_program_id' => TrainingProgram::where('name', "LIKE", '%'. $training_program[1] .'%')->first()->id
        ]);
        Batch::create([
            'number' => 7,
            'training_program_id' => TrainingProgram::where('name', "LIKE", '%'. $training_program[2] .'%')->first()->id
        ]);
    }
}
