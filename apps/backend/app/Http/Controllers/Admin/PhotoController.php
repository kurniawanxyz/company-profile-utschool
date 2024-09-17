<?php

namespace App\Http\Controllers\Admin;

use App\Helpers\HandleJsonResponseHelpers;
use App\Http\Controllers\Controller;
use App\Http\Requests\PostImageRequest;
use App\Models\Photo;
use DB;
use Illuminate\Http\Request;
use Storage;

class PhotoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try {
            $photos = Photo::paginate(10)->toArray();
            return HandleJsonResponseHelpers::res(data: $photos);
        } catch (\Exception $e) {
            return HandleJsonResponseHelpers::res("There is a server error!", $e->getMessage(), 500, false);
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(PostImageRequest $request)
    {
        try {
            DB::beginTransaction();
            $fileName = $request->file('image')->hashName();
            $path = $request->file('image')->storeAs('post_images', $fileName);
            $path = config('app.url') . '/storage/' . $path;

            Photo::create([
                'path' => $path
            ]);

            // return HandleJsonResponseHelpers::res("Successfully post image!", config('app.url') . '/storage/' . $path);
            DB::commit();
            return HandleJsonResponseHelpers::res("Successfully insert image!", $path);
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
            $photo = Photo::where('id', $id)->first();

            if (!$photo) {
                return HandleJsonResponseHelpers::res("Image ID not found!", [], 404, false);
            }

            return HandleJsonResponseHelpers::res(data: $photo);
        } catch (\Exception $e) {
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
            $photo = Photo::where('id', $id)->first();

            if(!$photo){
                return HandleJsonResponseHelpers::res("Image ID not found!", [], 404, false);
            }

            $image_path = explode("/storage/", $photo->path)[1];

            if (!Storage::exists($image_path)) Storage::delete($image_path);

            DB::commit();
            return HandleJsonResponseHelpers::res("Successfully delete image!");
        } catch (\Exception $e) {
            DB::rollBack();

            return HandleJsonResponseHelpers::res("There is a server error!", $e->getMessage(), 500, false);
        }
    }
}
