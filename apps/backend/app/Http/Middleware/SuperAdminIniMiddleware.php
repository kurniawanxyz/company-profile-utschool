<?php

namespace App\Http\Middleware;

use App\Helpers\HandleJsonResponseHelpers;
use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class SuperAdminIniMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        if (auth('sanctum')->check() && auth('sanctum')->user()->role == 'super_admin') {
            return $next($request);
        }

        return HandleJsonResponseHelpers::res("Access denied", "You don't have access to {$request->route()->uri()} route! Check your token is valid and not expired!", 403, false);
    }
}
