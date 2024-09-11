<?php

namespace App\Http\Controllers;

use App\Helpers\HandleJsonResponseHelpers;
use App\Http\Requests\StoreAdminRequest;
use App\Http\Requests\UpdateAdminRequest;
use App\Models\User;
use DB;
use Hash;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        try {
            $users = User::latest();

            if ($req = $request->input('query')) {
                $users = $users->where('email', "LIKE", "%" . $req . "%")->orWhere('name', "LIKE", "%" . $req . "%");
            }

            $users = $users->paginate(10);
            return HandleJsonResponseHelpers::res("Successfully get data!", $users);
        } catch (\Exception $e) {
            return HandleJsonResponseHelpers::res("There is a server error!", $e->getMessage(), 500, false);
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreAdminRequest $request)
    {
        try {
            DB::beginTransaction();

            $data = $request->all();
            $data['password'] = Hash::make($request->password);

            User::create($data);

            DB::commit();

            return HandleJsonResponseHelpers::res("Successfully add new " . str_replace("_", " ", $request->role) . "!");
        } catch (\Exception $e) {
            DB::rollBack();

            return HandleJsonResponseHelpers::res("There is a server error!", $e->getMessage(), 500, false);
        }

    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        try {
            $user = User::where("id", $id)->first();

            if (!$user) {
                return HandleJsonResponseHelpers::res("Data not found!", [], 404, false);
            }

            return HandleJsonResponseHelpers::res("Successfully get data!", $user);
        } catch (\Exception $e) {
            return HandleJsonResponseHelpers::res("There is a server error!", $e->getMessage(), 500, false);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateAdminRequest $request, string $id)
    {
        try {
            DB::beginTransaction();

            $user = User::where("id", $id)->first();

            if (!$user) {
                return HandleJsonResponseHelpers::res("Data not found!", [], 404, false);
            }

            $data = $request->all();
            if ($request->has('password')) {
                $data['password'] = Hash::make($request->password);
            }

            $user->update($data);

            DB::commit();

            return HandleJsonResponseHelpers::res("Successfully update!");
        } catch (\Exception $e) {
            DB::rollBack();

            return HandleJsonResponseHelpers::res("There is a server error!", $e->getMessage(), 500, false);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        try {
            DB::beginTransaction();

            $user = User::where("id", $id)->first();

            if (!$user) {
                return HandleJsonResponseHelpers::res("Data not found!", [], 404, false);
            }

            $user->delete();

            DB::commit();
            return HandleJsonResponseHelpers::res("Successfully delete!");
        } catch (\Exception $e) {
            DB::rollBack();

            return HandleJsonResponseHelpers::res("There is a server error!", $e->getMessage(), 500, false);
        }

    }
}
