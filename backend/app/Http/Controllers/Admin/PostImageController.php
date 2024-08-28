<?php

namespace App\Http\Controllers\Admin;

use App\Helpers\HandleJsonResponseHelpers;
use App\Http\Controllers\Controller;
use App\Http\Requests\PostImageRequest;
use Illuminate\Http\Request;

class PostImageController extends Controller
{
    public function __invoke(PostImageRequest $request)
    {
        try {
            $fileName = $request->file('image')->hashName();
            $path = $request->file('image')->storeAs('post_images', $fileName);

            return HandleJsonResponseHelpers::res("Successfully post image!", config('app.url') . '/storage/' . $path);
        } catch (\Exception $e) {
            return HandleJsonResponseHelpers::res("There is a server error!", $e->getMessage(), 500, false);
        }
    }
}
