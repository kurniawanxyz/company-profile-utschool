<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Storage;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Gallery>
 */
class GalleryFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $imageUrl = 'https://picsum.photos/640/480';
        $imageContent = Http::get($imageUrl)->body();

        // Generate nama file unik
        $fileName = 'gallery-' . uniqid() . '.jpg';

        // Simpan ke storage
        Storage::disk('public')->put('gallery/' . $fileName, $imageContent);


        return [
            "image_path" => $fileName
        ];
    }
}
