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
        if (!auth('sanctum')->check()) {
            return HandleJsonResponseHelpers::res("Access denied", "You don't have access!", 403, false);
        }

        if (auth('sanctum')->user()->role != 'super_admin') {
            return HandleJsonResponseHelpers::res("Access denied", "You don't have access to {$request->route()->uri()} route! Check your token is valid and not expired!", 499, false);
        }
        return $next($request);

    }
}
