<?php

namespace Database\Seeders;

use App\Models\LandingPageSetting;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class LandingPageSettingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        LandingPageSetting::create([
            'about' => "UT School Company Profile",
        'email' => "utschool@gmail.sch.id",
            'address' => "Jakarta timur, cakung",
            'telp' => "08234678789",
            'start_operation_hour' => "08:00",
            'end_operation_hour' => "17:00"
        ]);
    }
}
