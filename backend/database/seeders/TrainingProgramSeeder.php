<?php

namespace Database\Seeders;

use App\Models\TrainingProgram;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TrainingProgramSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $training_program = ['mekanik', 'operator', 'IT Programmer'];

        foreach($training_program as $tp){
            TrainingProgram::create([
                'name' => $tp
            ]);
        }
    }
}
