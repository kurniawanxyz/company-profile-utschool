<?php

namespace Database\Seeders;

use App\Models\Region;
use App\Models\SobatSchool;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SobatSchoolSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        $smk_data = [
            ["name" => "SMK Negeri 1 Jakarta", "location" => "Jakarta"],
            ["name" => "SMK Negeri 2 Bandung", "location" => "Bandung, Jawa Barat"],
            ["name" => "SMK Negeri 3 Semarang", "location" => "Semarang, Jawa Tengah"],
            ["name" => "SMK Negeri 4 Surabaya", "location" => "Surabaya, Jawa Timur"],
            ["name" => "SMK Negeri 5 Medan", "location" => "Medan, Sumatera Utara"],
            ["name" => "SMK Negeri 6 Yogyakarta", "location" => "Yogyakarta"],
            ["name" => "SMK Negeri 7 Malang", "location" => "Malang, Jawa Timur"],
            ["name" => "SMK Negeri 8 Denpasar", "location" => "Denpasar, Bali"],
            ["name" => "SMK Negeri 9 Makassar", "location" => "Makassar, Sulawesi Selatan"],
            ["name" => "SMK Negeri 10 Palembang", "location" => "Palembang, Sumatera Selatan"],
            ["name" => "SMK Negeri 11 Balikpapan", "location" => "Balikpapan, Kalimantan Timur"],
            ["name" => "SMK Negeri 12 Manado", "location" => "Manado, Sulawesi Utara"],
            ["name" => "SMK Negeri 13 Pontianak", "location" => "Pontianak, Kalimantan Barat"],
            ["name" => "SMK Negeri 14 Banjarmasin", "location" => "Banjarmasin, Kalimantan Selatan"],
            ["name" => "SMK Negeri 15 Banda Aceh", "location" => "Banda Aceh, Aceh"],
            ["name" => "SMK Negeri 16 Pekanbaru", "location" => "Pekanbaru, Riau"],
            ["name" => "SMK Negeri 17 Padang", "location" => "Padang, Sumatera Barat"],
            ["name" => "SMK Negeri 18 Mataram", "location" => "Mataram, Nusa Tenggara Barat"],
            ["name" => "SMK Negeri 19 Jayapura", "location" => "Jayapura, Papua"],
            ["name" => "SMK Negeri 20 Ambon", "location" => "Ambon, Maluku"]
        ];

        foreach ($smk_data as $school) {
            SobatSchool::create([
                'name' => $school['name'],
                'location' => $school['location'],
            ]);
        }
    }
}
