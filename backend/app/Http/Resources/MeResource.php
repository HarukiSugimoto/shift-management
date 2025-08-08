<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class MeResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            // @var integer
            'id' => $this->id,
            'name' => $this->name,
            'email' => $this->email,
            // 'authority' => $this->when($this->authority_id, new AuthorityResource($this->authority)),
        ];
    }
}
