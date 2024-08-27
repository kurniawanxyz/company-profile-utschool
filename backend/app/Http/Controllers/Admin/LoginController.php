<?php

namespace App\Http\Controllers\Admin;

use App\Helpers\HandleJsonResponseHelpers;
use App\Http\Controllers\Controller;
use App\Http\Requests\AdminLoginRequest;
use Auth;
use Carbon\Carbon;
use Illuminate\Http\Request;

class LoginController extends Controller
{
    public function login(AdminLoginRequest $request)
    {
        try{
            if (auth()->attempt($request->all(), false)) {
                $expired = Carbon::now()->addDay();

                $user = auth()->user();
                $success['token'] = $user->createToken(config('app.name'), ['*'], $expired)->plainTextToken;
                $success['name'] = $user->name;
                $success['expired'] = Carbon::parse($expired)->format("d-m-Y H:i:s");

                return HandleJsonResponseHelpers::res("Successfully login", $success);
            }

            return HandleJsonResponseHelpers::res("Incorrect email or password", [], 401, false);
        }catch(\Exception $e){
            return HandleJsonResponseHelpers::res("There is a server error!", $e->getMessage(), 500, false);
        }
    }
}
