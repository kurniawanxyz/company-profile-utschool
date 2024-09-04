<?php

namespace App\Http\Controllers\Admin;

use App\Helpers\HandleJsonResponseHelpers;
use App\Http\Controllers\Controller;
use App\Http\Requests\DeleteImageRequest;
use App\Http\Requests\PostImageRequest;
use Illuminate\Http\Request;
use Storage;

class PostImageController extends Controller
{
    public function __invoke(PostImageRequest $request)
    {
        try {
            $fileName = $request->file('image')->hashName();
            $path = $request->file('image')->storeAs('post_images', $fileName);

            // return HandleJsonResponseHelpers::res("Successfully post image!", config('app.url') . '/storage/' . $path);
            return response()->json(["location"=> config('app.url') . '/storage/' . $path]);
        } catch (\Exception $e) {
            return HandleJsonResponseHelpers::res("There is a server error!", $e->getMessage(), 500, false);
        }
    }
    public function delete(DeleteImageRequest $request)
    {
        try {
            $image_path = "post_images/" . $request->image_name;

            if (!Storage::exists($image_path)) {
                return HandleJsonResponseHelpers::res("Image not found!", "Image with name \"" . $request->image_name . "\" not found!", 404, false);
            }
            Storage::delete($image_path);

            return HandleJsonResponseHelpers::res("Successfully delete image!");
        } catch (\Exception $e) {
            return HandleJsonResponseHelpers::res("There is a server error!", $e->getMessage(), 500, false);
        }
    }
}
