<?php

return [

/*
|--------------------------------------------------------------------------
| CORS Paths
|--------------------------------------------------------------------------
|
| Define the paths where the CORS service should run. By default, the CORS
| middleware will match any incoming request with any of the following
| paths. You may customize this to better suit your application needs.
|
*/

'paths' => ['api/*'],  // Tentukan path API kamu di sini

/*
|--------------------------------------------------------------------------
| Allowed Methods
|--------------------------------------------------------------------------
|
| Here you may specify which methods are allowed during CORS requests.
| This allows you to control what methods are accessible through the API.
|
*/

'allowed_methods' => ['*'],  // Izinkan semua metode

/*
|--------------------------------------------------------------------------
| Allowed Origins
|--------------------------------------------------------------------------
|
| Here you can specify which origins are allowed to access your application.
| You can also allow access from any origin using a wildcard (*).
|
*/

'allowed_origins' => ['https://admin.utschoolhub.com'],  // Tentukan origin yang diperbolehkan

/*
|--------------------------------------------------------------------------
| Allowed Headers
|--------------------------------------------------------------------------
|
| These are the headers that are allowed to be sent by the client during
| CORS requests. You can specify any headers that your application uses.
|
*/

'allowed_headers' => ['*'],  // Izinkan semua header

/*
|--------------------------------------------------------------------------
| Supports Credentials
|--------------------------------------------------------------------------
|
| Set this to true to allow cookies to be sent across domains. This is only
| needed when you're dealing with session-based authentication.
|
*/

'supports_credentials' => false,
];
