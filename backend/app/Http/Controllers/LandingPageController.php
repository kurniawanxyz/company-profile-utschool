<?php

namespace App\Http\Controllers;

use App\Helpers\HandleJsonResponseHelpers;
use App\Http\Requests\SendEmailRequest;
use App\Mail\ContactMeMail;
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
}
