<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\InstructorRequest;
use App\Models\Instructor;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use App\Helpers\HandleJsonResponseHelpers;

class InstructorController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        try {
            $instructor = new Instructor();
            if ($req = $request->input('query')) {
                $instructor = $instructor->where('name', 'LIKE', "%" . $req . "%");
            }

            $instructor = $instructor->latest()->paginate(4);
            return HandleJsonResponseHelpers::res("Successfully get data!", $instructor);
        } catch (\Exception $e) {
            return HandleJsonResponseHelpers::res("There is a server error!", $e->getMessage(), 500, false);
        }
    }

    public function simpleIndex()
    {
        try {
            $instructor = Instructor::all();
            return HandleJsonResponseHelpers::res("Successfully get data!", $instructor);
        } catch (\Exception $e) {
            return HandleJsonResponseHelpers::res("There is a server error!", $e->getMessage(), 500, false);
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(InstructorRequest $request)
    {
        try {
            DB::beginTransaction();

            $data = $request->all();
            if ($request->hasFile('photo')) {
                $fileName = $request->file('photo')->hashName();
                $data['photo'] = $request->file('photo')->storeAs('instructors', $fileName);
            }

            Instructor::create($data);

            DB::commit();
            return HandleJsonResponseHelpers::res("Successfully insert a new instructor!");
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
            $instructor = Instructor::where('id', $id)->first();
            if (!$instructor) {
                return HandleJsonResponseHelpers::res("Data not found!", [], 404, false);
            }

            return HandleJsonResponseHelpers::res("Successfully get an instructor!", $instructor);
        } catch (\Exception $e) {
            return HandleJsonResponseHelpers::res("There is a server error!", $e->getMessage(), 500, false);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(InstructorRequest $request, string $id)
    {
        try {
            DB::beginTransaction();

            $instructor = Instructor::where('id', $id)->first();
            if (!$instructor) {
                return HandleJsonResponseHelpers::res("Data not found!", [], 404, false);
            }

            $photo = $instructor->photo;
            $data = $request->all();

            if ($request->hasFile('photo')) {
                Storage::exists($photo) && Storage::delete($photo);

                $fileName = $request->file('photo')->hashName();
                $data['photo'] = $request->file('photo')->storeAs('instructors', $fileName);
            }

            $instructor->update($data);

            DB::commit();
            return HandleJsonResponseHelpers::res("Successfully update instructor!");
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

            $instructor = Instructor::where('id', $id)->first();
            if (!$instructor) {
                return HandleJsonResponseHelpers::res("Data not found!", [], 404, false);
            }

            $photo_profile = $instructor->photo;
            Storage::exists($photo_profile) && Storage::delete($photo_profile);

            $instructor->delete();

            DB::commit();
            return HandleJsonResponseHelpers::res("Successfully delete instructor!");
        } catch (\Exception $e) {
            DB::rollBack();
            return HandleJsonResponseHelpers::res("There is a server error!", $e->getMessage(), 500, false);
        }
    }
}
