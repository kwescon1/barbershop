<?php

namespace App\Modules\Clients\Repositories;

use App\Models\Client;
use App\Modules\Clients\Contracts\ClientRepositoryInterface;
use App\Modules\Base\Repositories\BaseRepository;

class ClientRepository extends BaseRepository implements ClientRepositoryInterface
{
    public function __construct(Client $model)
    {
        parent::__construct($model);
    }
}
