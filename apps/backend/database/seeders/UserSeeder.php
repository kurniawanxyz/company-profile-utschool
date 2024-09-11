<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::create([
            "name" => "Admin",
            "email" => "admin@gmail.com",
            'role' => 'admin',
            "password" => Hash::make('password')
        ]);

        User::create([
            "name" => "Super Admin",
            "email" => config('credential.super_admin_email'),
            'role' => 'super_admin',
            "password" => Hash::make(config('credential.super_admin_password'))
        ]);
    }
}
