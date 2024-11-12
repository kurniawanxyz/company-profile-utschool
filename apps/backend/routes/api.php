<?php

use App\Http\Controllers\Admin\AlumniController;
use App\Http\Controllers\Admin\BatchController;
use App\Http\Controllers\Admin\DirectorController;
use App\Http\Controllers\Admin\GalleryCategoryController;
use App\Http\Controllers\Admin\GalleryController;
use App\Http\Controllers\Admin\LandingPageSettingController;
use App\Http\Controllers\Admin\LearningPointController;
use App\Http\Controllers\Admin\LoginController;
use App\Http\Controllers\Admin\NewsController;
use App\Http\Controllers\Admin\PhotoController;
use App\Http\Controllers\Admin\PostImageController;
use App\Http\Controllers\Admin\RegistrationController;
use App\Http\Controllers\Admin\RegistrationScheduleController;
use App\Http\Controllers\Admin\SobatSchoolController;
use App\Http\Controllers\Admin\SosmedController;
use App\Http\Controllers\Admin\TrainingProgramController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\LandingPageController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::options('{any}', function () {
    return response()->json(['status' => 'success'], 200);
})->where('any', '.*');

Route::post('/contact-me', [LandingPageController::class, 'contactMe']);
Route::get('/news', [LandingPageController::class, 'publicIndex']);
Route::get('/news/random', [LandingPageController::class, 'randomNews']);
Route::get('/news/short', [LandingPageController::class, 'simpleIndex']);
Route::get('/news/{id}', [NewsController::class, 'show']);
Route::get('/top-news', [LandingPageController::class, 'topNews']);
Route::get('/director', [DirectorController::class, 'simpleIndex']);
Route::get('/director/{id}', [DirectorController::class, 'show']);
Route::get('/gallery-category', [GalleryCategoryController::class, 'index']);
Route::get('/gallery', [GalleryController::class, 'index']);
Route::post('/registration', [RegistrationController::class, 'registration']);
Route::get('/registration/fields', [RegistrationController::class, 'registrationFields']);
Route::get('/list/training-program', [TrainingProgramController::class, 'simpleIndex']);
Route::get('/list/sobat-school', [SobatSchoolController::class, 'simpleIndex']);
Route::get('/list/category', [GalleryCategoryController::class, 'simpleIndex']);
Route::get('/list/learning-point', [LearningPointController::class, 'simpleIndex']);
Route::get('/landing-page-setting', [LandingPageSettingController::class, 'index']);
Route::get('/sosmed', [SosmedController::class, 'simpleIndex']);
Route::get('/alumni', [AlumniController::class, 'simpleIndex']);


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
        Route::apiResource('/training-program', TrainingProgramController::class)->only(['index', 'show']);
        Route::apiResource('/learning-point', LearningPointController::class)->only(['index', 'show']);
        Route::apiResource('/sobat-school', SobatSchoolController::class)->only(['index', 'show']);
        Route::get('/registration', [RegistrationController::class, 'index']);
        Route::get("/registration/export", [RegistrationController::class, 'exportData']);
        Route::put("/registration/approval", [RegistrationController::class, 'autoApproval']);
        Route::get("/registration/passed/export", [RegistrationController::class, 'passedExportData']);
        Route::patch("/registration/approval/{reg_id}", [RegistrationController::class, 'manualApproval']);

        Route::apiResource('/image-photo', PhotoController::class)->only(['index', 'show']);
        Route::apiResource('/landing-page-setting', LandingPageSettingController::class)->only('index')->except('store');
        Route::apiResource('/alumni', AlumniController::class)->only(['index', 'show']);
        Route::apiResource('/sosmed', SosmedController::class)->only(['index', 'show']);
    });

    // SUPER ADMIN
    Route::middleware('super-admin-ini')->group(function () {
        Route::apiResource('/users', AdminController::class);
        Route::apiResource('/gallery-category', GalleryCategoryController::class)->except(['index', 'show']);
        Route::apiResource('/director', DirectorController::class)->except(['index', 'show']);
        Route::apiResource('/training-program', TrainingProgramController::class)->except(['index', 'show']);
        Route::apiResource('/batch', BatchController::class)->except(['index', 'show']);
        Route::apiResource('/learning-point', LearningPointController::class)->except(['index', 'show']);
        Route::apiResource('/sobat-school', SobatSchoolController::class)->except(['index', 'show']);
        Route::apiResource('/registration/schedule', RegistrationScheduleController::class)->except(['index', 'show']);

        Route::apiResource('/image-photo', PhotoController::class)->only(['store', 'destroy'])->except(['index', 'show']);
        Route::apiResource('/landing-page-setting', LandingPageSettingController::class)->except('index')->only('store');
        Route::apiResource('/alumni', AlumniController::class)->except(['index', 'show']);
        Route::apiResource('/sosmed', SosmedController::class)->except(['index', 'show']);
    });
});
