<?php

namespace Database\Seeders;

use App\Models\Director;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Http;
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
        Director::create(
            [
                "photo_profile" => "directors/" . $fileName,
                "name" => "Muhammad Hamdan Aziz",
                "position" => "Direktur UT School",
                "message" => $f->sentence(),
                "description" => $f->text()
            ],
        );
    }
}
