<?php

namespace Database\Seeders;

use App\Models\Director;
use Http;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Storage;

class DirectorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $imageUrl = 'https://picsum.photos/640/480';
        $imageContent = Http::get($imageUrl)->body();

        $f = fake("id_ID");
        $fileName = 'director-' . uniqid() . '.jpg';

        Storage::disk('public')->put('directors/' . $fileName, $imageContent);
        Director::make(
            [
                "photo_profile" => "director/" . $fileName,
                "name" => "Muhammad Hamdan Aziz",
                "position" => "Direktur UT School",
                "message" => $f->sentence(),
                "description" => $f->text()
            ],
        );
    }
}