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

        $fileName = 'director-' . uniqid() . '.jpg';

        Storage::disk('public')->put('directors/' . $fileName, $imageContent);

        $f = fake("id_ID");
        for ($i = 1; $i <= 6; $i++) {
            Director::make(
                [
                    "photo_profile" => "director/". $fileName,
                    "name" => $f->name(),
                    "position" => $f->title(),
                    "message" => $f->sentence(),
                    "description" => $f->text()
                ],
            );
        }
    }
}
