<?php

namespace App\Modules\Clients\Contracts;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

interface ClientServiceInterface
{
    // public function store(array $data, array $authUser): ?Model;

    // public function update(array $data, int $id): ?Model;

    // public function findClient(int $id): ?Model;

    public function index(): ?Collection;

    // public function searchClient(string $query, array $authUser): Collection;

    // public function destroy($id): ?bool;
    public function generateClientNumber(): ?string;
}
