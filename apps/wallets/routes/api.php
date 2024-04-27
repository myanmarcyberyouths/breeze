<?php

use App\Http\Controllers\PaymentController;
use App\Http\Controllers\WalletController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::apiResource('/wallets', WalletController::class)->except('update');
Route::apiResource('/payments', PaymentController::class)->only('store');

Route::get('/wallets/users/{userId}', [WalletController::class, 'getWalletByUserId']);

