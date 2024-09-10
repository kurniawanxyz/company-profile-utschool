<?php

namespace App\Http\Requests;

use App\Helpers\HandleJsonResponseHelpers;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use PhpOffice\PhpSpreadsheet\IOFactory;
use PhpOffice\PhpSpreadsheet\Exception;

class FileApprovalRegistrationFormRequest extends FormRequest
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
            "registration_file" => [
                'required',
                'file',
                'mimes:xlsx',
                function ($attribute, $value, $fail) {
                    try {
                        $spreadsheet = IOFactory::load($value->getPathname());
                        if (count($spreadsheet->getAllSheets()) !== 1) {
                            $fail('The Excel file must contain exactly one worksheet.');
                        }
                    } catch (Exception $e) {
                        $fail('The file could not be processed as an Excel file.');
                    }
                },
            ]
        ];
    }

    public function failedValidation(\Illuminate\Contracts\Validation\Validator $validator)
    {
        $errors = $validator->errors()->toArray();

        throw new HttpResponseException(HandleJsonResponseHelpers::res("Error validation", $errors, 422, false));
    }
}
