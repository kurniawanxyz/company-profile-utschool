<?php

namespace Database\Seeders;

use App\Models\Alumni;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AlumniSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $f = fake("id_ID");
        for($i = 1; $i <= 10; $i++){
            Alumni::create([
                "name" => $f->firstNameMale(),
                "photo" => $f->imageUrl(),
                "placement" => $f->city()
            ]);
        }
    }
}
