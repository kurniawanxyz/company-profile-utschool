<?php

namespace App\Http\Requests;

use App\Helpers\HandleJsonResponseHelpers;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;

class AlumniRequest extends FormRequest
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
            "name" => "required",
            "photo" => "required|file|image|mimes:png,jpg,jpeg",
            "placement" => "required"
        ];
    }

    public function failedValidation(\Illuminate\Contracts\Validation\Validator $validator)
    {
        $errors = $validator->errors()->toArray();

        throw new HttpResponseException(HandleJsonResponseHelpers::res("Error validation", $errors, 422, false));
    }
}
