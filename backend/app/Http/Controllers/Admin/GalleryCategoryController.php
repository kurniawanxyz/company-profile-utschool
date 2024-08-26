<?php

namespace App\Http\Controllers\Admin;

use App\Helpers\HandleJsonResponseHelpers;
use App\Http\Controllers\Controller;
use App\Http\Requests\GalleryCategoryRequest;
use App\Models\GalleryCategory;
use Illuminate\Http\Request;

class GalleryCategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        try {
            $gc = GalleryCategory::latest();
            if($req = $request->input('query')){
                $gc->where('text', "LIKE", "%". $req ."%");
            }

            $gc = $gc->paginate(10);
            return HandleJsonResponseHelpers::res("Successfully get gallery category data!", $gc);
        } catch (\Exception $e) {
            return HandleJsonResponseHelpers::res("There is a server error!", $e->getMessage(), 500, false);
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(GalleryCategoryRequest $request)
    {
        try {
            GalleryCategory::create($request->all());

            return HandleJsonResponseHelpers::res("Successfully insert a new gallery category!");
        } catch (\Exception $e) {
            return HandleJsonResponseHelpers::res("There is a server error!", $e->getMessage(), 500, false);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        try {
            $gc = GalleryCategory::where('id', $id)->first();
            if (!$gc) {
                return HandleJsonResponseHelpers::res("Data not found!", [], 404, false);
            }

            return HandleJsonResponseHelpers::res("Successfully get gallery category!", $gc);
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
            $gc = GalleryCategory::where('id', $id);
            if(!$gc->first()){
                return HandleJsonResponseHelpers::res("Data not found!", [], 404, false);
            }

            $gc->update($request->all());

            return HandleJsonResponseHelpers::res("Successfully update gallery category!");
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
            $gc = GalleryCategory::where('id', $id);
            if (!$gc->first()) {
                return HandleJsonResponseHelpers::res("Data not found!", [], 404, false);
            }

            $gc->delete();

            return HandleJsonResponseHelpers::res("Successfully delete gallery category!");
        } catch (\Exception $e) {
            return HandleJsonResponseHelpers::res("There is a server error!", $e->getMessage(), 500, false);
        }
    }
}
