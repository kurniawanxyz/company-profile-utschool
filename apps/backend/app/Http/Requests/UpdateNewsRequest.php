<?php

namespace App\Http\Requests;

use App\Helpers\HandleJsonResponseHelpers;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;

class UpdateNewsRequest extends FormRequest
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
        $id = $this->route('news');
        return [
            "thumbnail" => "file|mimes:png,jpg,jpeg",
            "title" => "unique:news,title," . $id . ',id',
            "visibility" => "nullable|boolean",
            "description" => "max:1000",
            "content" => "max:1000",
        ];
    }

    public function failedValidation(\Illuminate\Contracts\Validation\Validator $validator)
    {
        $errors = $validator->errors()->toArray();

        throw new HttpResponseException(HandleJsonResponseHelpers::res("Error validation", $errors, 422, false));
    }
}
