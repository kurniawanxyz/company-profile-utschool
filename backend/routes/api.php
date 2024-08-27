<?php

use App\Http\Controllers\Admin\DirectorController;
use App\Http\Controllers\Admin\GalleryCategoryController;
use App\Http\Controllers\Admin\GalleryController;
use App\Http\Controllers\Admin\LoginController;
use App\Http\Controllers\Admin\NewsController;
use App\Http\Controllers\LandingPageController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


Route::post('/contact-me', [LandingPageController::class, 'contactMe']);


Route::post('/admin/login', [LoginController::class, 'login']);

Route::prefix('/admin')->middleware('admin-ini')->group(function(){
    Route::apiResource('/gallery-category', GalleryCategoryController::class);
    Route::apiResource('/gallery', GalleryController::class);
    Route::apiResource('/news', NewsController::class);
    Route::apiResource('/director', DirectorController::class);
});
