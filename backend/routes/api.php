<?php

use App\Http\Controllers\Admin\GalleryCategoryController;
use App\Http\Controllers\Admin\LoginController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


Route::post('/admin/login', [LoginController::class, 'login']);

Route::prefix('/admin')->middleware('admin-ini')->group(function(){
    Route::apiResource('/gallery-category', GalleryCategoryController::class);
});
