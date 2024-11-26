<?php

namespace App\Http\Requests;

use App\Helpers\HandleJsonResponseHelpers;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;

class UpdateDirectorRequest extends FormRequest
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
        $id = $this->route('director');
        return [
            "photo_profile" => "file|mimes:png,jpg,jpeg",
            "image1" => "file|mimes:png,jpg,jpeg",
            "image2" => "file|mimes:png,jpg,jpeg",
            "image3" => "file|mimes:png,jpg,jpeg",
            "video" => "file|mimes:mp4",
            "name" => "string|unique:directors,name,". $id .",id",
            "position" => "string",
            "description" => "min:1",
            "message" => "nullable|string"
        ];
    }
    public function failedValidation(\Illuminate\Contracts\Validation\Validator $validator)
    {
        $errors = $validator->errors()->toArray();

        throw new HttpResponseException(HandleJsonResponseHelpers::res("Error validation", $errors, 422, false));
    }
}
