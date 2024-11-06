<?php

namespace App\Http\Controllers\Admin;

use App\Helpers\HandleJsonResponseHelpers;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreNewsRequest;
use App\Http\Requests\UpdateNewsRequest;
use App\Models\News;
use DB;
use Illuminate\Http\Request;
use Storage;

class NewsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        try {
            $news = News::latest();
            if ($req = $request->input('query')) {
                $news = $news->where('title', 'LIKE', "%" . $req . "%");
            }

            $news = $news->paginate(10);
            return HandleJsonResponseHelpers::res("Successfully get data!", $news);
        } catch (\Exception $e) {
            return HandleJsonResponseHelpers::res("There is a server error!", $e->getMessage(), 500, false);
        }
    }
    public function publicIndex(Request $request)
    {
        try {
            $news = News::latest();
            if ($req = $request->input('query')) {
                $news = $news->where('title', 'LIKE', "%" . $req . "%");
            }

            $news = $news->where('visibility', 1)->paginate(10);
            return HandleJsonResponseHelpers::res("Successfully get data!", $news);
        } catch (\Exception $e) {
            return HandleJsonResponseHelpers::res("There is a server error!", $e->getMessage(), 500, false);
        }
    }

    public function simpleIndex(Request $request)
    {
        try {
            $news = News::latest();
            if ($req = $request->input('query')) {
                $news = $news->where('title', 'LIKE', "%" . $req . "%");
            }

            $news = $news->where('visibility', 1)->take(6)->get();
            return HandleJsonResponseHelpers::res("Successfully get data!", $news);
        } catch (\Exception $e) {
            return HandleJsonResponseHelpers::res("There is a server error!", $e->getMessage(), 500, false);
        }
    }

    public function randomNews()
    {
        try {
            $news = News::latest()->where('visibility', 1)->inRandomOrder()->take(4)->get();
            return HandleJsonResponseHelpers::res("Successfully get data!", $news);
        } catch (\Exception $e) {
            return HandleJsonResponseHelpers::res("There is a server error!", $e->getMessage(), 500, false);
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreNewsRequest $request)
    {
        try {
            DB::beginTransaction();

            $data = [...$request->all()];

            $fileName = $request->file('thumbnail')->hashName();
            $data['thumbnail'] = $request->file('thumbnail')->storeAs('news_thumbnail', $fileName);

            News::create($data);

            DB::commit();
            return HandleJsonResponseHelpers::res("Successfully insert a new news data!");
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
            $news = News::where('id', $id)->first();
            if (!$news) {
                return HandleJsonResponseHelpers::res("Data not found!", [], 404, false);
            }

            return HandleJsonResponseHelpers::res("Successfully get news!", $news);
        } catch (\Exception $e) {
            return HandleJsonResponseHelpers::res("There is a server error!", $e->getMessage(), 500, false);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateNewsRequest $request, string $id)
    {
        try {
            DB::beginTransaction();

            $news = News::where('id', $id)->first();
            if (!$news) {
                return HandleJsonResponseHelpers::res("Data not found!", [], 404, false);
            }

            $thumbnail_path = $news->thumbnail;
            $data = [...$request->except("_method")];

            if ($request->hasFile('thumbnail')) {
                Storage::exists($thumbnail_path) && Storage::delete($thumbnail_path);

                $fileName = $request->file('thumbnail')->hashName();
                $data['thumbnail'] = $request->file('thumbnail')->storeAs('news_thumbnail', $fileName);
            }

            $news->update($data);

            DB::commit();
            return HandleJsonResponseHelpers::res("Successfully update news data!");
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

            $news = News::where('id', $id)->first();
            if (!$news) {
                return HandleJsonResponseHelpers::res("Data not found!", [], 404, false);
            }

            $thumbnail_path = $news->thumbnail;

            Storage::exists($thumbnail_path) && Storage::delete($thumbnail_path);

            $news->delete();

            DB::commit();
            return HandleJsonResponseHelpers::res("Successfully delete news data!");
        } catch (\Exception $e) {
            DB::rollBack();
            return HandleJsonResponseHelpers::res("There is a server error!", $e->getMessage(), 500, false);
        }
    }
}
