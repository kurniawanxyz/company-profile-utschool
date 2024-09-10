<?php

namespace App\Http\Requests;

use App\Helpers\HandleJsonResponseHelpers;
use App\Models\Batch;
use App\Models\RegistrationSchedule;
use App\Models\TrainingProgram;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Validation\Validator;

class UpdateRegistrationScheduleRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'training_program_id' => "required|exists:training_programs,id",
            'learning_point_id' => "required|uuid|exists:learning_points,id",
            'sobat_school' => "required|array",
            'sobat_school.*' => "required|uuid|exists:sobat_schools,id|distinct",
            'start' => "required|date",
            "end" => "required|date|after:start"
        ];
    }

    protected function withValidator(Validator $validator)
    {
        if ($validator->fails()) {
            return;
        }

        $validator->after(function ($validator) {
            $programId = $this->input('training_program_id');
            $id = $this->route('schedule');

            $programExists = RegistrationSchedule::where('id', $id)->first();
            if (!$programExists) {
                $validator->errors()->add('id', "Schedule ID is not found!");
                return;
            }

            $programExists = RegistrationSchedule::where('id', '!=', $id)
                ->where('training_program_id', $programId)
                ->first();

            if ($programExists) {
                $validator->errors()->add('training_program_id', 'Training Program ' . TrainingProgram::where('id', $programId)->first()->name . ' already taken in this registration schedule.');
            }
        });
    }

    public function failedValidation(\Illuminate\Contracts\Validation\Validator $validator)
    {
        $errors = $validator->errors()->toArray();

        throw new HttpResponseException(HandleJsonResponseHelpers::res("Error validation", $errors, 422, false));
    }
}
