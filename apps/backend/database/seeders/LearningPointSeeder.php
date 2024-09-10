<?php

namespace Database\Seeders;

use App\Models\LearningPoint;
use App\Models\Region;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class LearningPointSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $kota_besar_indonesia = [
            "Jawa" => [
                "Jakarta",
                "Surabaya",
                "Bandung",
                "Semarang",
                "Yogyakarta",
                "Malang",
                "Bekasi"
            ],
            "Sumatera" => [
                "Medan",
                "Palembang",
                "Pekanbaru",
                "Padang",
                "Banda Aceh",
                "Lampung",
                "Jambi"
            ],
            "Kalimantan" => [
                "Balikpapan",
                "Samarinda",
                "Banjarmasin",
                "Pontianak",
                "Palangkaraya"
            ],
            "Sulawesi" => [
                "Makassar",
                "Manado",
                "Palu",
                "Kendari",
                "Gorontalo"
            ],
            "Bali" => [
                "Denpasar",
                "Singaraja"
            ],
            "Nusa Tenggara" => [
                "Mataram",
                "Kupang"
            ],
            "Maluku" => [
                "Ambon",
                "Ternate"
            ],
            "Papua" => [
                "Jayapura",
                "Merauke",
                "Timika",
                "Sorong"
            ]
        ];

        foreach ($kota_besar_indonesia as $key => $kbi) {
            foreach ($kbi as $city) {
                LearningPoint::create([
                    'name' => $city,
                    'location' => $city . "," . $key
                ]);
            }
        }
    }
}
