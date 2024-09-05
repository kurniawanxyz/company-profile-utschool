<?php

namespace App\Http\Requests;

use App\Helpers\HandleJsonResponseHelpers;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;

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
            'batch_id' => 'required|uuid|exists:batches,id',
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

    public function failedValidation(\Illuminate\Contracts\Validation\Validator $validator)
    {
        $errors = $validator->errors()->toArray();

        throw new HttpResponseException(HandleJsonResponseHelpers::res("Error validation", $errors, 422, false));
    }
}
