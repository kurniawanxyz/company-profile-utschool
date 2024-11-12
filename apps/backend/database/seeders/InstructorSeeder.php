<?php

namespace Database\Seeders;

use App\Models\Instructor;
use Http;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Storage;

class InstructorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        for ($i = 1; $i <= 10; $i++) {
            $imageUrl = 'https://picsum.photos/640/480';
            $imageContent = Http::get($imageUrl)->body();
            $f = fake("id_ID");
            $fileName = 'instructor-' . uniqid() . '.jpg';
            Storage::disk('public')->put('instructors/' . $fileName, $imageContent);

            Instructor::create([
                'photo' => 'instructors/' . $fileName,
                'name' => $f->name(),
                'position' => $f->jobTitle(),
                'placement' => $f->city(),
                'description' => $f->text()
            ]);
        }
    }
}
