<?php

namespace App\Http\Controllers\Admin;

use App\Helpers\HandleJsonResponseHelpers;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreTrainingProgramRequest;
use App\Http\Requests\UpdateTrainingProgramRequest;
use App\Models\TrainingProgram;
use DB;
use Illuminate\Http\Request;

class TrainingProgramController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        try {
            $tp = TrainingProgram::latest();
            if ($req = $request->input('query')) {
                $tp = $tp->where('name', "LIKE", "%" . $req . "%");
            }

            $tp = $tp->paginate(10);
            return HandleJsonResponseHelpers::res("Successfully get training program category data!", $tp);
        } catch (\Exception $e) {
            return HandleJsonResponseHelpers::res("There is a server error!", $e->getMessage(), 500, false);
        }
    }

    public function simpleIndex()
    {
        try {
            $tp = TrainingProgram::latest()->get(['id','name']);
            return HandleJsonResponseHelpers::res("Successfully get training program category data!", $tp);
        } catch (\Exception $e) {
            return HandleJsonResponseHelpers::res("There is a server error!", $e->getMessage(), 500, false);
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreTrainingProgramRequest $request)
    {
        try {
            DB::beginTransaction();
            TrainingProgram::create($request->all());

            DB::commit();
            return HandleJsonResponseHelpers::res("Successfully insert a new training program category!");
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
            $tp = TrainingProgram::where('id', $id)->first();
            if (!$tp) {
                return HandleJsonResponseHelpers::res("Data not found!", [], 404, false);
            }

            return HandleJsonResponseHelpers::res("Successfully get training program category!", $tp);
        } catch (\Exception $e) {
            return HandleJsonResponseHelpers::res("There is a server error!", $e->getMessage(), 500, false);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateTrainingProgramRequest $request, string $id)
    {
        try {
            DB::beginTransaction();
            $tp = TrainingProgram::where('id', $id)->first();
            if (!$tp) {
                return HandleJsonResponseHelpers::res("Data not found!", [], 404, false);
            }

            $tp->update($request->all());

            DB::commit();
            return HandleJsonResponseHelpers::res("Successfully update training program category!");
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
            $tp = TrainingProgram::where('id', $id)->first();
            if (!$tp) {
                return HandleJsonResponseHelpers::res("Data not found!", [], 404, false);
            }

            $tp->delete();

            DB::commit();
            return HandleJsonResponseHelpers::res("Successfully delete training program category!");
        } catch (\Exception $e) {
            DB::rollBack();
            return HandleJsonResponseHelpers::res("There is a server error!", $e->getMessage(), 500, false);
        }
    }
}
