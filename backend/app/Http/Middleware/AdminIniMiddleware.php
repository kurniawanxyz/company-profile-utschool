<?php

namespace App\Http\Middleware;

use App\Helpers\HandleJsonResponseHelpers;
use Auth;
use Closure;
use Illuminate\Http\Request;
use Laravel\Sanctum\PersonalAccessToken;
use Symfony\Component\HttpFoundation\Response;

class AdminIniMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        if (auth('sanctum')->check()) {
            return $next($request);
        }

        return HandleJsonResponseHelpers::res("Access denied", "You don't have access to {$request->route()->uri()} route!", 403, false);
    }
}
