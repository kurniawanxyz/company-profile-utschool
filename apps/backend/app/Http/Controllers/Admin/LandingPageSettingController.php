<?php

namespace App\Http\Controllers\Admin;

use App\Helpers\HandleJsonResponseHelpers;
use App\Http\Controllers\Controller;
use App\Http\Requests\LandingPageSettingRequest;
use App\Models\LandingPageSetting;
use DB;
use Illuminate\Http\Request;

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

            LandingPageSetting::updateOrCreate(
                ['id' => $lps->id],
                $request->all()
            );

            DB::commit();
            return HandleJsonResponseHelpers::res("Successfully setting landing page");
        } catch (\Exception $e) {
            DB::rollBack();

            return HandleJsonResponseHelpers::res("There is a server error!", $e->getMessage(), 500, false);
        }
    }
}
