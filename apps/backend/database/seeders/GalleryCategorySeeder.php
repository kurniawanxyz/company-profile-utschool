<?php

namespace Database\Seeders;

use App\Models\Gallery;
use App\Models\GalleryCategory;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class GalleryCategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        GalleryCategory::factory(5)
        ->has(Gallery::factory(5),"gallery")->create();
    }
}
