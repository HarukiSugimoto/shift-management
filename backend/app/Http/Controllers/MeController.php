<?php

namespace App\Http\Controllers;

use App\Http\Requests\MeRequest;
use App\Http\Resources\MeResource;
use Illuminate\Support\Facades\Log;

class MeController extends Controller
{
    public function __invoke(MeRequest $request)
    {
        $user = auth()->user();
        if (!$user) {
            Log::error('User not found for /me endpoint');
            return response()->json(['message' => 'Unauthorized'], 401);
        }

        return MeResource::make($user);
    }
}
