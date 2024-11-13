<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call(UserSeeder::class);
        $this->call(GalleryCategorySeeder::class);
        $this->call(TrainingProgramSeeder::class);
        $this->call(BatchSeeder::class);
        $this->call(SobatSchoolSeeder::class);
        $this->call(LearningPointSeeder::class);
        $this->call(RegistrationScheduleSeeder::class);
        $this->call(LandingPageSettingSeeder::class);
        $this->call(SosmedSeeder::class);
        $this->call(NewsSeeder::class);
        $this->call(AlumniSeeder::class);
        $this->call(DirectorSeeder::class);
        $this->call(InstructorSeeder::class);
    }
}
