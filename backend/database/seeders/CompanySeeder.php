<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CompanySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('companies')->insert([
            [
                'name' => '株式会社テスト',
                'email' => 'test@example.com',
            ],
            [
                'name' => '株式会社デバッグ',
                'email' => 'debug@example.com',
            ],
        ]);
    }
}
