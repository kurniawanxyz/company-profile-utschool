<?php

namespace App\Http\Controllers\Admin;

use App\Helpers\HandleJsonResponseHelpers;
use App\Http\Controllers\Controller;
use App\Http\Requests\SosmedRequest;
use App\Models\Sosmed;
use DB;
use Illuminate\Http\Request;

class SosmedController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try {
            $sosmed = Sosmed::all();

            return HandleJsonResponseHelpers::res(data: $sosmed);
        } catch (\Exception $e) {
            return HandleJsonResponseHelpers::res("There is a server error!", $e->getMessage(), 500, false);
        }
    }
    public function simpleIndex()
    {
        try {
            $sosmed = Sosmed::get(['type', 'url']);

            return HandleJsonResponseHelpers::res(data: $sosmed);
        } catch (\Exception $e) {
            return HandleJsonResponseHelpers::res("There is a server error!", $e->getMessage(), 500, false);
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(SosmedRequest $request)
    {
        try {
            DB::beginTransaction();
            Sosmed::create($request->all());
            DB::commit();
            return HandleJsonResponseHelpers::res("Successfully create new sosmed");
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
            $sosmed = Sosmed::where('id', $id)->first();
            if (!$sosmed) {
                return HandleJsonResponseHelpers::res("Data not found!", [], 404, false);
            }

            return HandleJsonResponseHelpers::res(data: $sosmed);
        } catch (\Exception $e) {
            return HandleJsonResponseHelpers::res("There is a server error!", $e->getMessage(), 500, false);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(SosmedRequest $request, string $id)
    {
        try {
            $sosmed = Sosmed::where('id', $id)->first();
            if (!$sosmed) {
                return HandleJsonResponseHelpers::res("Data not found!", [], 404, false);
            }

            DB::beginTransaction();

            $sosmed->update($request->all());

            DB::commit();
            return HandleJsonResponseHelpers::res("Successfully update sosmed");
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
            $sosmed = Sosmed::where('id', $id)->first();
            if (!$sosmed) {
                return HandleJsonResponseHelpers::res("Data not found!", [], 404, false);
            }

            $sosmed->delete();
            DB::commit();
            return HandleJsonResponseHelpers::res("Successfully delete sosmed");
        } catch (\Exception $e) {
            DB::rollBack();
            return HandleJsonResponseHelpers::res("There is a server error!", $e->getMessage(), 500, false);
        }
    }
}
