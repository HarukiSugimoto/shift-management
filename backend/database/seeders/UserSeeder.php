<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('users')->insert([
            [
                'name' => '管理者（株式会社テスト）',
                'email' => 'admin@test.com',
                'company_id' => 1,
                'password' => bcrypt('password'),
                'authority_id' => 1,
            ],
            [
                'name' => 'スタッフ（株式会社テスト）',
                'email' => 'staff@test.com',
                'company_id' => 1,
                'password' => bcrypt('password'),
                'authority_id' => 2,
            ],
            [
                'name' => '管理者（株式会社デバッグ）',
                'email' => 'admin@debug.com',
                'company_id' => 2,
                'password' => bcrypt('password'),
                'authority_id' => 3,
            ],
            [
                'name' => 'スタッフ（株式会社デバッグ）',
                'email' => 'staff@debug.com',
                'company_id' => 2,
                'password' => bcrypt('password'),
                'authority_id' => 4,
            ],
        ]);
    }
}
