<?php

namespace App\Http\Requests;

use App\Helpers\HandleJsonResponseHelpers;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;

class LandingPageSettingRequest extends FormRequest
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
            'about' => 'required|string',
            'email' => 'required|email',
            'address' => 'required|string',
            'telp' => 'required|string',
            'start_operation_hour' => 'required|date_format:H:i',
            'end_operation_hour' => 'required|date_format:H:i|after:start_operation_hour',
            'video' => 'nullable|file|mimes:mp4',
        ];
    }

    public function failedValidation(\Illuminate\Contracts\Validation\Validator $validator)
    {
        $errors = $validator->errors()->toArray();

        throw new HttpResponseException(HandleJsonResponseHelpers::res("Error validation", $errors, 422, false));
    }
}
