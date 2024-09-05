<?php

namespace App\Http\Controllers\Admin;

use App\Helpers\HandleJsonResponseHelpers;
use App\Http\Controllers\Controller;
use App\Http\Requests\RegistrationRequest;
use App\Models\HealthInformation;
use App\Models\PersonalData;
use App\Models\RegistrationForm;
use App\Models\RegistrationSchedule;
use Carbon\Carbon;
use DB;
use Illuminate\Http\Request;

class RegistrationController extends Controller
{
    public function registration(RegistrationRequest $request)
    {
        try{
            DB::beginTransaction();

            // registration_forms
            $form = new RegistrationForm();
            $form->batch_id = $request->batch_id;
            $form->learning_pattern = $request->learning_pattern;
            $form->is_willing_to_relocate = $request->is_willing_to_relocate;
            $form->compliance_agreement = $request->compliance_agreement;
            $form->full_name = $request->full_name;
            $form->place_of_birth = $request->place_of_birth;
            $form->date_of_birth = Carbon::parse($request->date_of_birth)->format('Y-m-d');
            $form->gender = $request->gender;
            $form->address = $request->address;
            $form->telephone_number = $request->telephone_number;
            $form->email = $request->email;
            $form->id_card = $request->id_card;
            $form->hobby = $request->hobby;
            $form->school_type = $request->school_type;
            $form->school_of_origin = $request->school_of_origin;
            $form->sobat_school_id = $request->sobat_school_id;
            $form->learning_point_id = $request->learning_point_id;
            $form->save();

            // health_information
            $healthInfo = new HealthInformation();
            $healthInfo->registration_form_id = $form->id;
            $healthInfo->past_illnesses = $request->past_illnesses;
            $healthInfo->weight = $request->weight;
            $healthInfo->height = $request->height;
            $healthInfo->wear_glasses = $request->wear_glasses;
            $healthInfo->color_blindness = $request->color_blindness;
            $healthInfo->address_and_phone_number = $request->address_and_phone_number;
            $healthInfo->school_transfer_option = $request->school_transfer_option;

            if ($request->hasFile('student_photo')) {
                $fileName = $request->file('student_photo')->hashName();
                $healthInfo->student_photo = $request->file('student_photo')->storeAs('student_photo', $fileName);
            }
            if ($request->hasFile('diploma_photo')) {
                $fileName = $request->file('diploma_photo')->hashName();
                $healthInfo->diploma_photo = $request->file('diploma_photo')->storeAs('diploma_photo', $fileName);
            }
            if ($request->hasFile('identity_photo')) {
                $fileName = $request->file('identity_photo')->hashName();
                $healthInfo->identity_photo = $request->file('identity_photo')->storeAs('identity_photo', $fileName);
            }

            $healthInfo->save();

            DB::commit();
            return HandleJsonResponseHelpers::res("Successfully submit registration form");
        }catch(\Exception $e){
            DB::rollBack();
            return HandleJsonResponseHelpers::res("There is a server error!", $e->getMessage(), 500, false);
        }
    }

    public function index(Request $request)
    {
        try {
            $from = RegistrationForm::latest();

            if($req = $request->has('query')){
                // $form = $from->where('name', "LIKE", "%". $req ."%")->orWhere();
            }
        } catch (\Exception $e) {
            return HandleJsonResponseHelpers::res("There is a server error!", $e->getMessage(), 500, false);
        }
    }
}
