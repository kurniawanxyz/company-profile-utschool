<?php

namespace App\Http\Middleware;

use App\Helpers\HandleJsonResponseHelpers;
use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class PublicAdminMiddleware
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

        return HandleJsonResponseHelpers::res("Access denied", "You don't have access!", 401, false);
    }
}
