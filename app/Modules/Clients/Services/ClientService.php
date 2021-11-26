<?php

namespace App\Modules\Clients\Services;

use Carbon\Carbon;
use App\Exceptions\NotFoundException;
use App\Exceptions\ValidationException;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Collection;
use App\Modules\Clients\Contracts\ClientServiceInterface;
use App\Modules\Clients\Contracts\ClientRepositoryInterface;


class ClientService implements ClientServiceInterface
{
    private $clientRepository;


    public function __construct(
        ClientRepositoryInterface $clientRepository
    ) {

        $this->clientRepository = $clientRepository;
    }

    /**
     * Creates a new user account.
     * NOTE: User status is as defined.
     *
     *
     * @param $data
     *
     * @return \Illuminate\Database\Eloquent\Model
     * @throws \App\Exceptions\NotFoundException
     * @throws \Illuminate\Database\Eloquent\ModelNotFoundException
     * @throws \App\Exceptions\ValidationException
     */
    // public function store($data, $authUser): ?Model
    // {
    // }





    /**
     * Update the specified resource in storage.
     *
     * @param  array $data
     * @param  int  $id
     *
     * @throws \Illuminate\Database\Eloquent\ModelNotFoundException
     * @throws \App\Exceptions\ValidationException
     *
     * @return \Illuminate\Database\Eloquent\Model
     */
    // public function update($data, int $id): ?Model
    // {
    // }



    /**
     * Returns a specified client.
     *
     * @throws NotFoundException
     */
    // public function findClient(int $id): ?Model
    // {
    // }

    /**
     * Returns a list of clients.
     *
     * @return Collection
     */
    public function index(): ?Collection
    {
        return $this->clientRepository->all();
    }

    /**
     * @throws ValidationException
     */
    // public function searchClient(string $query, $authUser): Collection
    // {
    // }

    // public function destroy($id): ?bool
    // {
    // }

    public function generateClientNumber(): ?string
    {
        return "number";
    }
    // private function generateSequentialNumber($authUser)
    // {
    // }


    // private function getLastSequentialNumber($authUser)
    // {
    // }

    // private function returnLastSequentialNumber($authUser)
    // {
    // }
}
