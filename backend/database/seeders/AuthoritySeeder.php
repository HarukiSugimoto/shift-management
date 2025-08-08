<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AuthoritySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('authorities')->insert([
            [
                'name' => '管理者（株式会社テスト）',
                'company_id' => 1,
            ],
            [
                'name' => 'スタッフ（株式会社テスト）',
                'company_id' => 1,
            ],
            [
                'name' => '管理者（株式会社デバッグ）',
                'company_id' => 2,
            ],
            [
                'name' => 'スタッフ（株式会社デバッグ）',
                'company_id' => 2,
            ],
        ]);
    }
}
