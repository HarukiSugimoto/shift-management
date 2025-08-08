<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AuthorityDetailSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $adminAdminAuthorityId = [1000, 1001, 1002, 1100, 1101, 1102, 1103, 1200, 1201, 1300, 1400];
        $adminStaffAuthorityId = [1100, 1101, 1102, 1200, 1300];
        $adminAuthorityId = [1, 2, 3, 4];
        $insertData = [];
        foreach ($adminAuthorityId as $authorityId) {
            foreach ($adminAdminAuthorityId as $authorityDetailNo) {
                $insertData[] = [
                    'authority_id' => $authorityId,
                    'detail_no' => $authorityDetailNo,
                ];
            }

        }
        DB::table('authority_details')->insert($insertData);
    }
}
