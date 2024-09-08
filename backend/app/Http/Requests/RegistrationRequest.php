<?php

namespace App\Http\Requests;

use App\Helpers\HandleJsonResponseHelpers;
use App\Models\RegistrationSchedule;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Validation\Validator;

class RegistrationRequest extends FormRequest
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
            // registration_forms
            'training_program_id' => 'required|uuid|exists:training_programs,id',
            'learning_pattern' => 'required|string|max:255',
            'is_willing_to_relocate' => 'required|boolean',
            'compliance_agreement' => 'required|boolean',
            'full_name' => 'required|string|max:255',
            'place_of_birth' => 'required|string|max:255',
            'date_of_birth' => 'required|date',
            'gender' => 'required|in:L,P',
            'address' => 'required|string|max:255',
            'telephone_number' => 'required|string|max:20',
            'email' => 'required|email|unique:registration_forms,email',
            'id_card' => 'required|string|max:255',
            'hobby' => 'required|string|max:255',
            'school_type' => 'required|in:SMK,SLTA',
            'school_of_origin' => 'required|string|max:255',
            'major' => 'required|string|max:255',
            'sobat_school_id' => 'required|uuid|exists:sobat_schools,id',
            'learning_point_id' => 'required|uuid|exists:learning_points,id',

            // health_information
            'past_illnesses' => 'nullable|string',
            'weight' => 'required|string|max:10',
            'height' => 'required|string|max:10',
            'wear_glasses' => 'required|boolean',
            'color_blindness' => 'required|boolean',
            'address_and_phone_number' => 'required|string|max:255',
            'school_transfer_option' => 'required|boolean',
            'student_photo' => 'required|image|max:2048',
            'diploma_photo' => 'required|image|max:2048',
            'identity_photo' => 'required|image|max:2048',
        ];
    }

    protected function withValidator(Validator $validator)
    {
        $validator->after(function ($validator) {
            $programId = $this->input('training_program_id');
            $sobat_school_id = $this->input('sobat_school_id');
            $learning_point_id = $this->input('learning_point_id');

            $reg_schedule = RegistrationSchedule::where('training_program_id', $programId)->first();

            if (!$reg_schedule || empty($reg_schedule->toArray())) {
                $validator->errors()->add('training_program_id', 'Training Program is not available in registration schedule!');
            }

            if ($reg_schedule) {
                $sobatSchoolExists = RegistrationSchedule::where('training_program_id', $programId)
                    ->whereHas('sobatSchool', function ($query) use ($sobat_school_id) {
                        $query->where('sobat_schools.id', $sobat_school_id);
                    })->exists();

                if (!$sobatSchoolExists) {
                    $validator->errors()->add('sobat_school_id', 'Sobat School is not available in registration schedule!');
                }

                $learningPointExists = RegistrationSchedule::where('training_program_id', $programId)
                    ->whereHas('learningPoint', function ($query) use ($learning_point_id) {
                        $query->where('learning_points.id', $learning_point_id);
                    })->exists();


                if (!$learningPointExists) {
                    $validator->errors()->add('learning_point_id', 'Learning point is not available in registration schedule!');
                }
            }
        });
    }

    public function failedValidation(\Illuminate\Contracts\Validation\Validator $validator)
    {
        $errors = $validator->errors()->toArray();

        throw new HttpResponseException(HandleJsonResponseHelpers::res("Error validation", $errors, 422, false));
    }
}
