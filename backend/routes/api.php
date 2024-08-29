<?php

use App\Http\Controllers\Admin\DirectorController;
use App\Http\Controllers\Admin\GalleryCategoryController;
use App\Http\Controllers\Admin\GalleryController;
use App\Http\Controllers\Admin\LoginController;
use App\Http\Controllers\Admin\NewsController;
use App\Http\Controllers\Admin\PostImageController;
use App\Http\Controllers\Admin\TrainingProgramController;
use App\Http\Controllers\LandingPageController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


Route::post('/contact-me', [LandingPageController::class, 'contactMe']);
Route::get('/news', [NewsController::class, 'index']);
Route::get('/top-news', [LandingPageController::class, 'topNews']);
Route::get('/director', [DirectorController::class, 'index']);
Route::get('/gallery-category', [GalleryCategoryController::class, 'index']);
Route::get('/gallery', [GalleryController::class, 'index']);


Route::post('/admin/login', [LoginController::class, 'login']);

Route::prefix('/admin')->middleware('admin-ini')->group(function(){
    Route::post("/logout", [LoginController::class, 'logout']);

    Route::apiResource('/gallery-category', GalleryCategoryController::class);
    Route::apiResource('/gallery', GalleryController::class);
    Route::apiResource('/news', NewsController::class);
    Route::apiResource('/director', DirectorController::class);
    Route::apiResource('/training-program', TrainingProgramController::class);

    // post image
    Route::post('/post-image', PostImageController::class);
});
