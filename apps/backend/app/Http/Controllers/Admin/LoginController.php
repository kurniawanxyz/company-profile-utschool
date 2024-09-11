<?php

namespace App\Http\Controllers\Admin;

use App\Helpers\HandleJsonResponseHelpers;
use App\Http\Controllers\Controller;
use App\Http\Requests\AdminLoginRequest;
use Auth;
use Carbon\Carbon;
use DB;
use Illuminate\Http\Request;

class LoginController extends Controller
{
    public function login(AdminLoginRequest $request)
    {
        try{
            DB::beginTransaction();
            if (auth()->attempt($request->all(), false)) {
                $expired = Carbon::now()->addDay();

                $user = auth()->user();
                $success['token'] = $user->createToken(config('app.name'), ['*'], $expired)->plainTextToken;
                $success['name'] = $user->name;
                $success['role'] = $user->role;
                $success['expired'] = Carbon::parse($expired)->format("d-m-Y H:i:s");

                DB::commit();
                return HandleJsonResponseHelpers::res("Successfully login", $success);
            }

            return HandleJsonResponseHelpers::res("Incorrect email or password", [], 401, false);
        }catch(\Exception $e){
            DB::rollBack();
            return HandleJsonResponseHelpers::res("There is a server error!", $e->getMessage(), 500, false);
        }
    }

    public function logout()
    {
        try{
            DB::beginTransaction();

            auth('sanctum')->user()->currentAccessToken()->delete();

            DB::commit();
            return HandleJsonResponseHelpers::res("Successfully Logout!");
        } catch (\Exception $e) {
            DB::rollBack();
            return HandleJsonResponseHelpers::res("There is a server error!", $e->getMessage(), 500, false);
        }
    }
}
