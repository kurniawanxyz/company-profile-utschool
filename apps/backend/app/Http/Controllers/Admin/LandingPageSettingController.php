<?php

namespace App\Http\Controllers\Admin;

use App\Helpers\HandleJsonResponseHelpers;
use App\Http\Controllers\Controller;
use App\Http\Requests\LandingPageSettingRequest;
use App\Models\LandingPageSetting;
use DB;
use Illuminate\Http\Request;
use Storage;

class LandingPageSettingController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $lps = LandingPageSetting::first();
        return HandleJsonResponseHelpers::res(data: $lps);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(LandingPageSettingRequest $request)
    {
        try {
            DB::beginTransaction();
            $lps = LandingPageSetting::first();

            $data = $request->all();

            if ($request->hasFile("video")) {
                $lps && $lps->video && Storage::exists($lps->video) && Storage::delete($lps->video);

                $fileName = $request->file("video")->hashName();
                $data['video'] = $request->file("video")->storeAs("landing_page", $fileName);
            }

            LandingPageSetting::updateOrCreate(
                ['id' => $lps ? $lps->id : null],
                $data
            );

            DB::commit();
            return HandleJsonResponseHelpers::res("Successfully setting landing page");
        } catch (\Exception $e) {
            DB::rollBack();

            return HandleJsonResponseHelpers::res("There is a server error!", $e->getMessage(), 500, false);
        }
    }
}
