<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Exceptions\NotFoundException;
use App\Http\Resources\ClientResource;
use App\Exceptions\ValidationException;
use App\Modules\Clients\Contracts\ClientServiceInterface;

class ClientController extends Controller
{

    private $clientService;

    public function __construct(ClientServiceInterface $clientService)
    {
        $this->clientService = $clientService;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->success(new ClientResource($this->clientService->index()));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        try {
            return response()->created(new ClientResource($this->clientService->index()));
        } catch (NotFoundException $e) {
            return response()->notfound($e->getMessage());
        } catch (ValidationException $e) {
            return response()->error($e->getMessage(), Response::HTTP_BAD_REQUEST);
        } catch (\Exception $e) {
            return response()->error($e->getMessage());
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    public function genClientNumber()
    {
        return response()->success($this->clientService->generateClientNumber());
    }
}
