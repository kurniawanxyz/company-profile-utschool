<?php

namespace App\Http\Controllers\Admin;

use App\Helpers\HandleJsonResponseHelpers;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreRegistrationScheduleRequest;
use App\Http\Requests\UpdateRegistrationScheduleRequest;
use App\Models\Batch;
use App\Models\RegistrationForm;
use App\Models\RegistrationSchedule;
use Carbon\Carbon;
use DB;
use Illuminate\Http\Request;

class RegistrationScheduleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        try {
            $schedule = RegistrationSchedule::latest()->with(['batch', 'training_program:id,name', 'learning_point:id,name,location', 'sobatSchool']);
            if ($request->has('query')) {
                $input = $request->input('query');

                $schedule = $schedule->whereHas('batch', function ($query) use ($input) {
                    $query->where('number', $input)
                        ->orWhereHas('training_program', function ($query) use ($input) {
                            $query->where('name', 'LIKE', "%{$input}%");
                        });
                })->orWhereHas('learning_point', function ($query) use ($input) {
                    $query->where('name', $input);
                });
            }
            $schedule = $schedule->paginate(10);

            return HandleJsonResponseHelpers::res("Successfully get registration schedule data!", $schedule);
        } catch (\Exception $e) {
            return HandleJsonResponseHelpers::res("There is a server error!", $e->getMessage(), 500, false);
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreRegistrationScheduleRequest $request)
    {
        try {
            DB::beginTransaction();
            $register = new RegistrationSchedule();
            $register->training_program_id = $request->training_program_id;
            $register->batch_id = Batch::latest()->where('training_program_id', $request->training_program_id)->first()->id;
            $register->learning_point_id = $request->learning_point_id;
            $register->start = Carbon::parse($request->start)->format('Y-m-d');
            $register->end = Carbon::parse($request->end)->format('Y-m-d');
            $register->save();
            $register->sobatSchool()->sync($request->sobat_school);

            DB::commit();
            return HandleJsonResponseHelpers::res("Successfully create registration schedule!`");
        } catch (\Exception $e) {
            DB::rollBack();

            return HandleJsonResponseHelpers::res("There is a server error!", $e->getMessage(), 500, false);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Request $request, string $id)
    {
        try {
            $reg = RegistrationSchedule::with(['batch', 'training_program', 'learning_point', 'sobatSchool'])->where('id', $id)->first();

            if (!$reg) {
                return HandleJsonResponseHelpers::res("Data not found!", [], 404, false);
            }

            $batchId = $reg->batch->id;
            $lp = $reg->learning_point->id;
            $forms = RegistrationForm::where('batch_id', $batchId)->where('learning_point_id', $lp);

            if($req = $request->input('query')){
                $form = $forms->where("full_name", "LIKE", "%". $req ."%");
            }

            $reg['registration_form'] = $forms->get();

            return HandleJsonResponseHelpers::res("Successfully get registration schedule detail data!", $reg);
        } catch (\Exception $e) {
            return HandleJsonResponseHelpers::res("There is a server error!", $e->getMessage(), 500, false);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateRegistrationScheduleRequest $request, string $id)
    {
        try {
            DB::beginTransaction();
            $register = RegistrationSchedule::where('id', $id)->first();

            if (!$register) {
                return HandleJsonResponseHelpers::res("Data not found!", [], 404, false);
            }

            $register->batch_id = Batch::latest()->where('training_program_id', $request->training_program_id)->first()->id;
            $register->training_program_id = $request->training_program_id;
            $register->learning_point_id = $request->learning_point_id;
            $register->start = Carbon::parse($request->start)->format('Y-m-d');
            $register->end = Carbon::parse($request->end)->format('Y-m-d');
            $register->save();
            $register->sobatSchool()->sync($request->sobat_school);

            DB::commit();
            return HandleJsonResponseHelpers::res("Successfully update registration schedule!`");
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

            $registrationSchedule = RegistrationSchedule::find($id);
            if (!$registrationSchedule) {
                return HandleJsonResponseHelpers::res("Registration schedule not found!", [], 404, false);
            }

            $registrationSchedule->sobatSchool()->detach();
            $registrationSchedule->delete();

            DB::commit();
            return HandleJsonResponseHelpers::res("Successfully deleted registration schedule!");
        } catch (\Exception $e) {
            DB::rollBack();

            return HandleJsonResponseHelpers::res("There is a server error!", $e->getMessage(), 500, false);
        }
    }
}
