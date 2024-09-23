<?php

namespace App\Http\Controllers\Admin;

use App\Exports\FormRegistrationExport;
use App\Exports\PassedRegistrationFormExport;
use App\Helpers\HandleJsonResponseHelpers;
use App\Http\Controllers\Controller;
use App\Http\Requests\ApprovalRegistrationFormRequest;
use App\Http\Requests\FileApprovalRegistrationFormRequest;
use App\Http\Requests\RegistrationRequest;
use App\Imports\RegistrationFormImport;
use App\Models\Batch;
use App\Models\HealthInformation;
use App\Models\LearningPoint;
use App\Models\RegistrationForm;
use App\Models\RegistrationSchedule;
use App\Models\SobatSchool;
use App\Models\TrainingProgram;
use Carbon\Carbon;
use DB;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;
use Storage;

class RegistrationController extends Controller
{
    public function registration(RegistrationRequest $request)
    {
        try {
            DB::beginTransaction();

            // registration_forms
            $form = new RegistrationForm();
            $form->batch_id = Batch::latest()->where('training_program_id', $request->training_program_id)->latest()->first()->id;
            $form->is_willing_to_relocate = $request->is_willing_to_relocate;
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
            $form->major = $request->major;
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

            if ($request->hasFile('resident_photo')) {
                $fileName = $request->file('resident_photo')->hashName();
                $healthInfo->resident_photo = $request->file('resident_photo')->storeAs('resident_photo', $fileName);
            }
            if ($request->hasFile('diploma_photo')) {
                $fileName = $request->file('diploma_photo')->hashName();
                $healthInfo->diploma_photo = $request->file('diploma_photo')->storeAs('diploma_photo', $fileName);
            }
            if ($request->hasFile('family_card_photo')) {
                $fileName = $request->file('family_card_photo')->hashName();
                $healthInfo->family_card_photo = $request->file('family_card_photo')->storeAs('family_card_photo', $fileName);
            }

            $healthInfo->save();

            DB::commit();
            return HandleJsonResponseHelpers::res("Successfully submit registration form");
        } catch (\Exception $e) {
            DB::rollBack();
            return HandleJsonResponseHelpers::res("There is a server error!", $e->getMessage(), 500, false);
        }
    }

    public function index(Request $request)
    {
        try {
            $form = RegistrationForm::latest();

            if ($req = $request->input('query')) {
                $form = $form->where('full_name', "LIKE", "%" . $req . "%");
            }

            $form = $form->paginate(10);

            return HandleJsonResponseHelpers::res("Successfully get registration data!", $form);
        } catch (\Exception $e) {
            return HandleJsonResponseHelpers::res("There is a server error!", $e->getMessage(), 500, false);
        }
    }

    public function exportData(Request $request)
    {
        try {
            return Excel::download(new FormRegistrationExport($request->input('query')), 'Data siswa pendaftaran ' . date("Y-m") . '.xlsx', \Maatwebsite\Excel\Excel::XLSX);
        } catch (\Exception $e) {
            return HandleJsonResponseHelpers::res("There is a server error!", $e->getMessage(), 500, false);
        }
    }
    public function passedExportData(Request $request)
    {
        try {
            return Excel::download(new PassedRegistrationFormExport($request->input('query')), 'Data siswa lolos pendaftaran ' . date("Y-m") . '.xlsx');
        } catch (\Exception $e) {
            return HandleJsonResponseHelpers::res("There is a server error!", $e->getMessage(), 500, false);
        }
    }

    public function autoApproval(FileApprovalRegistrationFormRequest $request)
    {
        try {
            DB::beginTransaction();
            Excel::import(new RegistrationFormImport, $request->file('registration_file'));

            DB::commit();

            return HandleJsonResponseHelpers::res("Successfully submit approval registration form!");
        } catch (\Exception $e) {
            DB::rollBack();

            return HandleJsonResponseHelpers::res("There is a server error!", $e->getMessage(), 500, false);
        }
    }
    public function manualApproval(ApprovalRegistrationFormRequest $request, string $id)
    {
        try {
            DB::beginTransaction();

            $reg = RegistrationForm::where('id', $id)->first();

            if (!$reg) {
                return HandleJsonResponseHelpers::res("Data not found!", [], 404, false);
            }
            $reg->update($request->all());
            DB::commit();

            return HandleJsonResponseHelpers::res("Successfully " . $request->approval . $reg->full_name . " form!");
        } catch (\Exception $e) {
            DB::rollBack();

            return HandleJsonResponseHelpers::res("There is a server error!", $e->getMessage(), 500, false);
        }
    }

    public function registrationFields()
    {
        try {
            $training_program = TrainingProgram::get(["id", "name"]);
            $batch = Batch::latest()->whereIn('training_program_id', $training_program->pluck('id'))->pluck('id');
            $schedule = RegistrationSchedule::with('learning_point:id,name,location')->whereDate('end', ">=", Carbon::now("Asia/Jakarta"))->whereIn('batch_id', $batch)->with(['training_program', 'sobatSchool'])->get()->toArray();

            return HandleJsonResponseHelpers::res("Successfully get data!", [
                "training_programs" => $training_program->toArray(),
                "schedules" => $schedule
            ]);
        } catch (\Exception $e) {
            return HandleJsonResponseHelpers::res("There is a server error!", $e->getMessage(), 500, false);
        }

    }
}
