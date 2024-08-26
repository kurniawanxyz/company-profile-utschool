<?php

namespace App\Http\Controllers\Admin;

use App\Helpers\HandleJsonResponseHelpers;
use App\Http\Controllers\Controller;
use App\Http\Requests\AdminLoginRequest;
use Auth;
use Illuminate\Http\Request;

class LoginController extends Controller
{
    public function login(AdminLoginRequest $request)
    {
        try{
            if (auth()->attempt($request->all(), false)) {
                $user = auth()->user();
                $success['token'] = $user->createToken(config('app.name'))->plainTextToken;
                $success['name'] = $user->name;

                return HandleJsonResponseHelpers::res("Successfully login", $success);
            }

            return HandleJsonResponseHelpers::res("Incorrect email or password", [], 401, false);
        }catch(\Exception $e){
            return HandleJsonResponseHelpers::res("There is a server error!", $e->getMessage(), 500, false);
        }
    }
}
