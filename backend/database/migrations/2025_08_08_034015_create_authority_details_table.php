<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('authority_details', function (Blueprint $table) {
            $table->foreignId('authority_id')->constrained('authorities')->onDelete('cascade');
            $table->integer('detail_no');
            $table->unique(['authority_id', 'detail_no']);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('authority_details');
    }
};
