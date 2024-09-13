<?php

namespace App\Http\Controllers\Admin;

use App\Helpers\HandleJsonResponseHelpers;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreLearningPointRequest;
use App\Http\Requests\UpdateLearningPointRequest;
use App\Models\LearningPoint;
use DB;
use Illuminate\Http\Request;

class LearingPointController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        try {
            $lp = LearningPoint::latest();
            if ($req = $request->input('query')) {
                $lp = $lp->where('text', "LIKE", "%" . $req . "%");
            }

            $lp = $lp->paginate(10);
            return HandleJsonResponseHelpers::res("Successfully get learning point category data!", $lp);
        } catch (\Exception $e) {
            return HandleJsonResponseHelpers::res("There is a server error!", $e->getMessage(), 500, false);
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreLearningPointRequest $request)
    {
        try {
            DB::beginTransaction();
            LearningPoint::create($request->all());

            DB::commit();
            return HandleJsonResponseHelpers::res("Successfully insert a new learning point category!");
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
            $lp = LearningPoint::where('id', $id)->first();
            if (!$lp) {
                return HandleJsonResponseHelpers::res("Data not found!", [], 404, false);
            }

            return HandleJsonResponseHelpers::res("Successfully get learning point category!", $lp);
        } catch (\Exception $e) {
            return HandleJsonResponseHelpers::res("There is a server error!", $e->getMessage(), 500, false);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateLearningPointRequest $request, string $id)
    {
        try {
            DB::beginTransaction();
            $lp = LearningPoint::where('id', $id)->first();
            if (!$lp) {
                return HandleJsonResponseHelpers::res("Data not found!", [], 404, false);
            }

            $lp->update($request->all());

            DB::commit();
            return HandleJsonResponseHelpers::res("Successfully update learning point category!");
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
            $lp = LearningPoint::where('id', $id)->first();
            if (!$lp) {
                return HandleJsonResponseHelpers::res("Data not found!", [], 404, false);
            }

            $lp->delete();

            DB::commit();
            return HandleJsonResponseHelpers::res("Successfully delete learning point category!");
        } catch (\Exception $e) {
            DB::rollBack();
            return HandleJsonResponseHelpers::res("There is a server error!", $e->getMessage(), 500, false);
        }
    }
}
