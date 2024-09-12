<?php

namespace Database\Seeders;

use App\Models\Batch;
use App\Models\LearningPoint;
use App\Models\RegistrationSchedule;
use App\Models\SobatSchool;
use App\Models\TrainingProgram;
use Carbon\Carbon;
use DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class RegistrationScheduleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $start = Carbon::now();
        $end = $start->copy()->addMonth();

        for ($i = 1; $i <= 3; $i++) {
            foreach (TrainingProgram::all() as $tp) {
                $usedLearningPointIds = RegistrationSchedule::pluck('learning_program_id')->toArray();

                $batchId = Batch::inRandomOrder()->first()->id;

                if (empty($usedLearningPointIds)) {
                    $learningPointId = LearningPoint::first()->id;
                } else {
                    $learningPointId = LearningPoint::whereNotIn('id', $usedLearningPointIds)->inRandomOrder()->first()->id;
                }

                $registrationSchedule = RegistrationSchedule::create([
                    "training_program_id" => $tp->id,
                    "batch_id" => $batchId,
                    "learning_point_id" => $learningPointId,
                    "start" => $start,
                    "end" => $end
                ]);

                $this->attachRandomSobatSchools($registrationSchedule);

                $start = $start->copy()->addMonth();
                $end = $start->copy()->addMonth();
            }
        }
    }
    private function attachRandomSobatSchools($registrationSchedule)
    {
        $sobatSchools = SobatSchool::whereNotIn('id', function ($query) use ($registrationSchedule) {
            $query->select('sobat_school_id')
                ->from('registration_schedule_sobat_school')
                ->where('reg_schedule_id', $registrationSchedule->id);
        })->inRandomOrder()->take(3)->pluck('id');

        $registrationSchedule->sobatSchool()->attach($sobatSchools);
    }
}
