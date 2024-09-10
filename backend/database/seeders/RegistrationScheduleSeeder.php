<?php

namespace Database\Seeders;

use App\Models\Batch;
use App\Models\LearningPoint;
use App\Models\RegistrationSchedule;
use App\Models\SobatSchool;
use App\Models\TrainingProgram;
use Carbon\Carbon;
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

        foreach (TrainingProgram::all() as $tp) {
            $usedBatchIds = RegistrationSchedule::pluck('batch_id')->toArray();
            // dd($usedBatchIds);

            if (empty($usedBatchIds)) {
                $batchId = Batch::first()->id;
            } else {
                $batchId = Batch::whereNotIn('id', $usedBatchIds)->first()->id;
            }

            $registrationSchedule = RegistrationSchedule::create([
                "training_program_id" => $tp->id,
                "batch_id" => $batchId,
                "start" => $start,
                "end" => $end
            ]);

            $this->attachRandomLearningPoints($registrationSchedule);
            $this->attachRandomSobatSchools($registrationSchedule);

            $start = $start->copy()->addMonth();
            $end = $start->copy()->addMonth();
        }
    }

    private function attachRandomLearningPoints($registrationSchedule)
    {
        $learningPoints = LearningPoint::whereNotIn('id', function ($query) use ($registrationSchedule) {
            $query->select('learning_point_id')
                ->from('registration_schedule_learning_point')
                ->where('reg_sched_id', $registrationSchedule->id);
        })->inRandomOrder()->take(3)->pluck('id');

        $registrationSchedule->learningPoint()->attach($learningPoints);
    }

    private function attachRandomSobatSchools($registrationSchedule)
    {
        $sobatSchools = SobatSchool::whereNotIn('id', function ($query) use ($registrationSchedule) {
            $query->select('sobat_school_id')
                ->from('registration_schedule_sobat_school')
                ->where('reg_sched_id', $registrationSchedule->id);
        })->inRandomOrder()->take(3)->pluck('id');

        $registrationSchedule->sobatSchool()->attach($sobatSchools);
    }
}
