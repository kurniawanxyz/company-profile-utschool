<?php

use App\Http\Controllers\Admin\BatchController;
use App\Http\Controllers\Admin\DirectorController;
use App\Http\Controllers\Admin\GalleryCategoryController;
use App\Http\Controllers\Admin\GalleryController;
use App\Http\Controllers\Admin\LearingPointController;
use App\Http\Controllers\Admin\LoginController;
use App\Http\Controllers\Admin\NewsController;
use App\Http\Controllers\Admin\PostImageController;
use App\Http\Controllers\Admin\RegistrationController;
use App\Http\Controllers\Admin\RegistrationScheduleController;
use App\Http\Controllers\Admin\SobatSchoolController;
use App\Http\Controllers\Admin\TrainingProgramController;
use App\Http\Controllers\AdminController;
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
Route::post('/registration', [RegistrationController::class, 'registration']);
Route::get('/registration/fields', [RegistrationController::class, 'registrationFields']);
Route::get('/chat-bot', [LandingPageController::class, 'chatBot']);


Route::post('/admin/login', [LoginController::class, 'login']);

Route::prefix('/admin')->group(function () {
    // PUBLIC ADMIN
    Route::middleware('public-admin')->group(function () {
        Route::post("/logout", [LoginController::class, 'logout']);

        Route::apiResource('/gallery-category', GalleryCategoryController::class)->only(['index', 'show']);
        Route::apiResource('/gallery', GalleryController::class);
        Route::apiResource('/news', NewsController::class);
        Route::apiResource('/registration/schedule', RegistrationScheduleController::class)->only(['index', 'show']);
        Route::apiResource('/batch', BatchController::class)->only(['index', 'show']);
        Route::apiResource('/director', DirectorController::class)->only(['index', 'show']);
        Route::apiResource('/batch', BatchController::class)->only(['index', 'show']);
        Route::apiResource('/learning-point', LearingPointController::class)->only(['index', 'show']);
        Route::apiResource('/sobat-school', SobatSchoolController::class)->only(['index', 'show']);
        Route::get('/list/category', [GalleryCategoryController::class, 'simpleIndex']);
        Route::get('/registration', [RegistrationController::class, 'index']);
        Route::get("/registration/export", [RegistrationController::class, 'exportData']);
        Route::put("/registration/approval", [RegistrationController::class, 'autoApproval']);
        Route::get("/registration/passed/export", [RegistrationController::class, 'passedExportData']);
        Route::patch("/registration/approval/{reg_id}", [RegistrationController::class, 'manualApproval']);

        // post image
        Route::post('/post-image', PostImageController::class);
        Route::delete('/delete-image', [PostImageController::class, 'delete']);
    });

    // SUPER ADMIN
    Route::middleware('super-admin-ini')->group(function () {
        Route::apiResource('/admin', AdminController::class);
        Route::apiResource('/gallery-category', GalleryCategoryController::class)->except(['index', 'show']);
        Route::apiResource('/director', DirectorController::class)->except(['index', 'show']);
        Route::apiResource('/training-program', TrainingProgramController::class)->except(['index', 'show']);
        Route::apiResource('/batch', BatchController::class)->except(['index', 'show']);
        Route::apiResource('/learning-point', LearingPointController::class)->except(['index', 'show']);
        Route::apiResource('/sobat-school', SobatSchoolController::class)->except(['index', 'show']);
        Route::apiResource('/registration/schedule', RegistrationScheduleController::class)->except(['index', 'show']);
    });
});
