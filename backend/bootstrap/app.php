<?php

use App\Helpers\HandleJsonResponseHelpers;
use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;
use Illuminate\Http\Request;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__.'/../routes/web.php',
        api: __DIR__.'/../routes/api.php',
        commands: __DIR__.'/../routes/console.php',
        health: '/up',
    )
    ->withMiddleware(function (Middleware $middleware) {
        $middleware->alias([
            'verifyKey' => App\Http\Middleware\VerifyAPIKey::class,
            'admin-ini' => App\Http\Middleware\AdminIniMiddleware::class
        ]);
        $middleware->prependToGroup('api', 'verifyKey');
    })
    ->withExceptions(function (Exceptions $exceptions) {
        $exceptions->render(function (Exception $e, Request $request) {
            if ($request->is('api/*')) {
                return HandleJsonResponseHelpers::res("There is a server error!", $e->getMessage(), 500, false);
            }
        });
    })->create();
