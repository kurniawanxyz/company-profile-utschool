<?php

namespace App\Http\Controllers\Admin;

use App\Helpers\HandleJsonResponseHelpers;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreDirectorRequest;
use App\Http\Requests\UpdateDirectorRequest;
use App\Models\Director;
use DB;
use Illuminate\Http\Request;
use Storage;

class DirectorController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        try {
            $director = new Director();
            if ($req = $request->input('query')) {
                $director = $director->where('name', 'LIKE', "%" . $req . "%");
            }

            $director = $director->paginate(4);
            return HandleJsonResponseHelpers::res("Successfully get data!", $director);
        } catch (\Exception $e) {
            return HandleJsonResponseHelpers::res("There is a server error!", $e->getMessage(), 500, false);
        }
    }
    public function simpleIndex(Request $request)
    {
        try {
            $director = Director::first();

            return HandleJsonResponseHelpers::res("Successfully get data!", $director);
        } catch (\Exception $e) {
            return HandleJsonResponseHelpers::res("There is a server error!", $e->getMessage(), 500, false);
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreDirectorRequest $request)
    {
        try {
            DB::beginTransaction();

            $data = [...$request->all()];

            $fileName = $request->file('photo_profile')->hashName();
            $data['photo_profile'] = $request->file('photo_profile')->storeAs('directors_photo_profiles', $fileName);

            Director::create($data);

            DB::commit();
            return HandleJsonResponseHelpers::res("Successfully insert a new director!");
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
            $director = Director::where('id', $id)->first();
            if(!$director){
                return HandleJsonResponseHelpers::res("Data not found!", [], 404, false);
            }

            return HandleJsonResponseHelpers::res("Successfully get a director!", $director);
        } catch (\Exception $e) {
            return HandleJsonResponseHelpers::res("There is a server error!", $e->getMessage(), 500, false);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateDirectorRequest $request, string $id)
    {
        try {
            DB::beginTransaction();

            $director = Director::where('id', $id)->first();
            if (!$director) {
                return HandleJsonResponseHelpers::res("Data not found!", [], 404, false);
            }

            $photo_profile = $director->photo_profile;
            $data = [...$request->all()];

            if($request->hasFile('photo_profile')){
                Storage::exists($photo_profile) && Storage::delete($photo_profile);

                $fileName = $request->file('photo_profile')->hashName();
                $data['photo_profile'] = $request->file('photo_profile')->storeAs('directors_photo_profiles', $fileName);
            }

            $director->update($data);

            DB::commit();
            return HandleJsonResponseHelpers::res("Successfully update director!");
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

            $director = Director::where('id', $id)->first();
            if (!$director) {
                return HandleJsonResponseHelpers::res("Data not found!", [], 404, false);
            }

            $photo_profile = $director->photo_profile;
            Storage::exists($photo_profile) && Storage::delete($photo_profile);

            $director->delete();

            DB::commit();
            return HandleJsonResponseHelpers::res("Successfully delete director!");
        } catch (\Exception $e) {
            DB::rollBack();

            return HandleJsonResponseHelpers::res("There is a server error!", $e->getMessage(), 500, false);
        }
    }
}
