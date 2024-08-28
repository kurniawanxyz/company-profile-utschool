<?php

namespace App\Http\Controllers\Admin;

use App\Helpers\HandleJsonResponseHelpers;
use App\Http\Controllers\Controller;
use App\Http\Requests\PostImageRequest;
use App\Http\Requests\StoreGalleryRequest;
use App\Http\Requests\UpdateGalleryRequest;
use App\Models\Gallery;
use DB;
use Illuminate\Http\Request;
use Storage;

class GalleryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        try {
            $gallery = Gallery::latest()->with(["gallery_category"]);
            if ($req = $request->input('query')) {
                $gallery->whereHas('gallery_category', function ($query) use ($req) {
                    $query->where('text', 'LIKE', "%" . $req . "%");
                });
            }

            $gallery = $gallery->paginate(10);
            return HandleJsonResponseHelpers::res("Successfully get gallery data!", $gallery);
        } catch (\Exception $e) {
            return HandleJsonResponseHelpers::res("There is a server error!", $e->getMessage(), 500, false);
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreGalleryRequest $request)
    {
        try {
            DB::beginTransaction();
            $fileName = $request->file('image')->hashName();
            $image_path = $request->file('image')->storeAs('gallery', $fileName);

            Gallery::create([
                'gallery_category_id' => $request->gallery_category_id,
                "image_path" => $image_path
            ]);

            DB::commit();
            return HandleJsonResponseHelpers::res("Successfully insert a new gallery!");
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
            $gallery = Gallery::with('gallery_category')->where('id', $id)->first();
            if (!$gallery) {
                return HandleJsonResponseHelpers::res("Data not found!", [], 404, false);
            }

            return HandleJsonResponseHelpers::res("Successfully get gallery!", $gallery);
        } catch (\Exception $e) {
            return HandleJsonResponseHelpers::res("There is a server error!", $e->getMessage(), 500, false);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        try {
            DB::beginTransaction();
            $gallery = Gallery::where('id', $id)->first();
            if (!$gallery) {
                return HandleJsonResponseHelpers::res("Data not found!", [], 404, false);
            }

            $image_path = $gallery->image_path;
            $data = array_filter([
                'gallery_category_id' => $request->gallery_category_id,
            ]);

            if($request->hasFile('image')){
                Storage::exists($image_path) && Storage::delete($image_path);

                $fileName = $request->file('image')->hashName();
                $data['image_path'] = $request->file('image')->storeAs('gallery', $fileName);
            }

            $gallery->update($data);

            DB::commit();
            return HandleJsonResponseHelpers::res("Successfully update gallery!");
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
            $gallery = Gallery::where('id', $id)->first();
            if (!$gallery) {
                return HandleJsonResponseHelpers::res("Data not found!", [], 404, false);
            }

            $image_path = $gallery->image_path;
            Storage::exists($image_path) && Storage::delete($image_path);

            $gallery->delete();

            DB::commit();
            return HandleJsonResponseHelpers::res("Successfully delete gallery!");
        } catch (\Exception $e) {
            DB::rollBack();
            return HandleJsonResponseHelpers::res("There is a server error!", $e->getMessage(), 500, false);
        }
    }
}
