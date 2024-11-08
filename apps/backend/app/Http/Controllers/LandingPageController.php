<?php

namespace App\Http\Controllers;

use App\Helpers\HandleJsonResponseHelpers;
use App\Http\Requests\SendEmailRequest;
use App\Mail\ContactMeMail;
use App\Models\News;
use Illuminate\Http\Request;
use Mail;

class LandingPageController extends Controller
{
    public function contactMe(SendEmailRequest $request)
    {
        try {
            Mail::to(config('credential.uts_email'))->send(new ContactMeMail($request->all()));

            return HandleJsonResponseHelpers::res("Successfully send email!");
        } catch (\Exception $e) {
            return HandleJsonResponseHelpers::res("There is a server error!", $e->getMessage(), 500, false);
        }
    }

    public function topNews()
    {
        try {
            $news = News::latest()->where("visibility", 1)->first();

            return HandleJsonResponseHelpers::res("Successfully get top news!", $news);
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

            $news = $news->where('visibility', 1)->paginate(6);
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
}
