<?php

namespace App\Http\Requests;

use App\Helpers\HandleJsonResponseHelpers;
use App\Models\RegistrationSchedule;
use App\Models\TrainingProgram;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Validation\Validator;

class StoreRegistrationScheduleRequest extends FormRequest
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
            'sobat_school' => "required|array",
            'learning_point' => "required|array",
            'sobat_school.*' => "required|uuid|exists:sobat_schools,id",
            'learning_point.*' => "required|uuid|exists:learning_points,id",
            'start' => "required|date",
            "end" => "required|date|after:start"
        ];
    }

    protected function withValidator(Validator $validator)
    {
        $validator->after(function ($validator) {
            $programId = $this->input('training_program_id');

            $existingProgramsInRegSchedule = RegistrationSchedule::where('training_program_id', $programId)->first();

            if ($existingProgramsInRegSchedule) {
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
