<?php

namespace App\Http\Controllers\Admin;

use App\Helpers\HandleJsonResponseHelpers;
use App\Http\Controllers\Controller;
use App\Http\Requests\BatchRequest;
use App\Models\Batch;
use App\Models\TrainingProgram;
use DB;
use Illuminate\Http\Request;

class BatchController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        try {
            $batch = Batch::with('training_program:id,name')->latest();
            if ($req = $request->input('query')) {
                $batch = $batch->where('number', "LIKE", "%" . $req . "%")->orWhereHas('training_program', function ($query) use ($req) {
                    $query->where('name', 'LIKE', "%" . $req . "%");
                });
            }

            $batch = $batch->paginate(10);
            return HandleJsonResponseHelpers::res("Successfully get batch data!", $batch);
        } catch (\Exception $e) {
            return HandleJsonResponseHelpers::res("There is a server error!", $e->getMessage(), 500, false);
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(BatchRequest $request)
    {
        try {
            DB::beginTransaction();
            Batch::create($request->all());

            DB::commit();
            return HandleJsonResponseHelpers::res("Successfully insert a new batch!");
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
            $batch = Batch::with('training_program')->where('id', $id)->first();
            if (!$batch) {
                return HandleJsonResponseHelpers::res("Data not found!", [], 404, false);
            }

            return HandleJsonResponseHelpers::res("Successfully get batch!", $batch);
        } catch (\Exception $e) {
            return HandleJsonResponseHelpers::res("There is a server error!", $e->getMessage(), 500, false);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(BatchRequest $request, string $id)
    {
        try {
            DB::beginTransaction();
            $batch = Batch::where('id', $id)->first();
            if (!$batch) {
                return HandleJsonResponseHelpers::res("Data not found!", [], 404, false);
            }

            $batch->update($request->all());

            DB::commit();
            return HandleJsonResponseHelpers::res("Successfully update batch!");
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
            $batch = Batch::where('id', $id)->first();
            if (!$batch) {
                return HandleJsonResponseHelpers::res("Data not found!", [], 404, false);
            }

            $batch->delete();

            DB::commit();
            return HandleJsonResponseHelpers::res("Successfully delete batch!");
        } catch (\Exception $e) {
            DB::rollBack();
            return HandleJsonResponseHelpers::res("There is a server error!", $e->getMessage(), 500, false);
        }
    }
}
