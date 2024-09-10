<?php

namespace App\Http\Middleware;

use App\Helpers\HandleJsonResponseHelpers;
use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class VerifyAPIKey
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $apiKey = config('credential.api_key');

        $apiKeyIsValid = (
            !empty($apiKey)
            && $request->header('x-api-key') == $apiKey
        );

        // abort_if(!$apiKeyIsValid, 403, 'Access denied');

        if (!$request->header('x-api-key')) {
            return HandleJsonResponseHelpers::res("Missing API key", "Access denied for route " . $request->route()->uri(), Response::HTTP_FORBIDDEN, false);
        }
        if (!$apiKeyIsValid) {
            return HandleJsonResponseHelpers::res("Invalid API key", "Access denied for route " . $request->route()->uri(), Response::HTTP_FORBIDDEN, false);
        }

        return $next($request);
    }
}
