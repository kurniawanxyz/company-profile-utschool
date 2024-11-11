<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Http;
use Mmo\Faker\PicsumProvider;
use Faker\Factory as Faker;
use Illuminate\Support\Facades\Storage;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\News>
 */
class NewsFactory extends Factory
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
        $fileName = 'news-' . uniqid() . '.jpg';

        // Simpan ke storage
        Storage::disk('public')->put('news_thumbnail/' . $fileName, $imageContent);

        return [
            "visibility" => $this->faker->randomElement([true, false]),
            "thumbnail" => 'news_thumbnail/' . $fileName,
            "title" => $this->faker->sentence(),
            "description" => $this->faker->text(200),
            "content" => $this->faker->text(3000),
        ];
    }


}
