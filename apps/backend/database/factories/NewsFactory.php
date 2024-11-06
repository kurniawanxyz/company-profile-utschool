<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

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
        return [
            "visibility" => $this->faker->randomElement([true, false]),
            "thumbnail" => $this->faker->imageUrl(),
            "title" => $this->faker->sentence(),
            "description" => $this->faker->text(200),
            "content" => $this->faker->text(3000),
        ];
    }
}
