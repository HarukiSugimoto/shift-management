<?php

use App\Http\Controllers\MeController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/me', MeController::class)->name('me');

// Route::middleware('api')->group(function () {
//     require base_path('routes/auth.php');
// });
