<?php

namespace Database\Seeders;

use App\Models\Sosmed;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SosmedSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Sosmed::create([
            "type" => "Instagram",
            "url" => "https://www.instagram.com/p/DBKvWdAPMfo/"
        ]);
        Sosmed::create([
            "type" => "Youtube",
            "url" => "https://youtu.be/_jh2fqmhj5E?si=r8KMCEsN1_98e2XK"
        ]);
        Sosmed::create([
            "type" => "TikTok",
            "url" => "https://www.tiktok.com/@utschool.unitedtractors/video/7429227886642613512?is_from_webapp=1&sender_device=pc&web_id=7349755127115695618"
        ]);
        Sosmed::create([
            "type" => "Facebook",
            "url" => "https://www.facebook.com/share/p/VtFHEwhkZptbtUtc/"
        ]);
    }
}
