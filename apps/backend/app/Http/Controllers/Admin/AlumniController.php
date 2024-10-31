<?php

namespace App\Http\Controllers\Admin;

use App\Helpers\HandleJsonResponseHelpers;
use App\Http\Controllers\Controller;
use App\Http\Requests\AlumniRequest;
use App\Models\Alumni;
use DB;
use Illuminate\Http\Request;
use Storage;

class AlumniController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        try {
            $alumni = Alumni::latest();
            if ($req = $request->input('query')) {
                $alumni->where('name', 'LIKE', "%" . $req . "%")
                    ->orWhere('placement', 'LIKE', "%" . $req . "%")
                    ->get();
            }
            $alumni = $alumni->get();

            return HandleJsonResponseHelpers::res(data: $alumni);
        } catch (\Exception $e) {
            return HandleJsonResponseHelpers::res("There is a server error!", $e->getMessage(), 500, false);
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(AlumniRequest $request)
    {
        try {
            DB::beginTransaction();

            $data = $request->all();
            $fileName = $request->file('photo')->hashName();
            $image_path = $request->file('photo')->storeAs('alumni', $fileName);
            $data['photo'] = $image_path;

            Alumni::create($data);

            DB::commit();
            return HandleJsonResponseHelpers::res("Successfully create new Alumni");
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
            $alumni = Alumni::where('id', $id)->first();
            if (!$alumni) {
                return HandleJsonResponseHelpers::res("Data not found!", [], 404, false);
            }

            return HandleJsonResponseHelpers::res(data: $alumni);
        } catch (\Exception $e) {
            return HandleJsonResponseHelpers::res("There is a server error!", $e->getMessage(), 500, false);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(AlumniRequest $request, string $id)
    {
        try {
            $alumni = Alumni::where('id', $id)->first();
            if (!$alumni) {
                return HandleJsonResponseHelpers::res("Data not found!", [], 404, false);
            }

            $data = $request->except(['_method']);
            if($request->hasFile('photo')){
                Storage::exists($alumni->photo) && Storage::delete($alumni->photo);

                $fileName = $request->file('photo')->hashName();
                $image_path = $request->file('photo')->storeAs('alumni', $fileName);

                $data['photo'] = $image_path;
            }

            DB::beginTransaction();
            $alumni->update($data);

            DB::commit();
            return HandleJsonResponseHelpers::res("Successfully update Alumni");
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
            $alumni = Alumni::where('id', $id)->first();
            if (!$alumni) {
                return HandleJsonResponseHelpers::res("Data not found!", [], 404, false);
            }

            Storage::exists($alumni->photo) && Storage::delete($alumni->photo);
            $alumni->delete();
            return HandleJsonResponseHelpers::res("Successfully delete Alumni");
        } catch (\Exception $e) {
            return HandleJsonResponseHelpers::res("There is a server error!", $e->getMessage(), 500, false);
        }
    }
}
