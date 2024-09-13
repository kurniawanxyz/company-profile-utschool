<?php

namespace App\Http\Controllers\Admin;

use App\Helpers\HandleJsonResponseHelpers;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreSobatSchoolRequest;
use App\Http\Requests\UpdateSobatSchoolRequest;
use App\Models\SobatSchool;
use DB;
use Illuminate\Http\Request;

class SobatSchoolController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        try {
            $ss = SobatSchool::latest();
            if ($req = $request->input('query')) {
                $ss = $ss->where('text', "LIKE", "%" . $req . "%");
            }

            $ss = $ss->paginate(10);
            return HandleJsonResponseHelpers::res("Successfully get gallery category data!", $ss);
        } catch (\Exception $e) {
            return HandleJsonResponseHelpers::res("There is a server error!", $e->getMessage(), 500, false);
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreSobatSchoolRequest $request)
    {
        try {
            DB::beginTransaction();
            SobatSchool::create($request->all());

            DB::commit();
            return HandleJsonResponseHelpers::res("Successfully insert a new gallery category!");
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
            $ss = SobatSchool::where('id', $id)->first();
            if (!$ss) {
                return HandleJsonResponseHelpers::res("Data not found!", [], 404, false);
            }

            return HandleJsonResponseHelpers::res("Successfully get gallery category!", $ss);
        } catch (\Exception $e) {
            return HandleJsonResponseHelpers::res("There is a server error!", $e->getMessage(), 500, false);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateSobatSchoolRequest $request, string $id)
    {
        try {
            DB::beginTransaction();
            $ss = SobatSchool::where('id', $id)->first();
            if (!$ss) {
                return HandleJsonResponseHelpers::res("Data not found!", [], 404, false);
            }

            $ss->update($request->all());

            DB::commit();
            return HandleJsonResponseHelpers::res("Successfully update gallery category!");
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
            $ss = SobatSchool::where('id', $id)->first();
            if (!$ss) {
                return HandleJsonResponseHelpers::res("Data not found!", [], 404, false);
            }

            $ss->delete();

            DB::commit();
            return HandleJsonResponseHelpers::res("Successfully delete gallery category!");
        } catch (\Exception $e) {
            DB::rollBack();
            return HandleJsonResponseHelpers::res("There is a server error!", $e->getMessage(), 500, false);
        }
    }
}
