<?php

namespace App\Providers;

use Schema;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\{
  ServiceProvider,
  Facades\Response
};
use App\Modules\Clients\Services\ClientService;
use App\Modules\Clients\Contracts\ClientServiceInterface;



class AppServiceProvider extends ServiceProvider
{
  /**
   * Register any application services.
   *
   * @return void
   */
  public function register()
  {

    $this->app->bind(ClientServiceInterface::class, ClientService::class);
  }

  /**
   * Bootstrap any application services.
   *
   * @return void
   */
  public function boot()
  {
    //
    Schema::defaultStringLength(191);
    JsonResource::withoutwrapping();

    Response::macro('success', function ($data) {
      return response()->json([
        'data' => $data ?: null,
      ]);
    });

    Response::macro('created', function ($data) {
      return response()->json([
        'data' => $data ?: null,
      ], \Illuminate\Http\Response::HTTP_CREATED);
    });

    Response::macro('notfound', function ($error) {
      return response()->json([
        'error' => $error,
      ], \Illuminate\Http\Response::HTTP_NOT_FOUND);
    });

    Response::macro('error', function ($error, $statusCode = \Illuminate\Http\Response::HTTP_INTERNAL_SERVER_ERROR) {
      return response()->json([
        'error' => $error,
      ], $statusCode);
    });
  }
}
