<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ClientResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            "firstname" => $this->firstname,
            "othernames" => $this->othernames,
            "lastname" => $this->lastname,
            "mobile_number" => $this->mobile_number,
            "sex" => $this->sex,
            "number_of_cuts" => $this->number_of_cuts,
            "status" => $this->cut_status,
        ]
    }
}
