<?php

namespace App\Http\Requests;

use App\Helpers\HandleJsonResponseHelpers;
use App\Models\Batch;
use App\Models\TrainingProgram;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Validation\Validator;
use Illuminate\Validation\Rule;

class BatchRequest extends FormRequest
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
            "number" => [
                "required",
                "integer"
            ],
            "training_program_id" => "required|uuid|exists:training_programs,id",
        ];
    }

    protected function withValidator(Validator $validator)
    {
        if ($validator->fails()) {
            return;
        }

        $validator->after(function ($validator) {
            $batchNumber = $this->input('number');
            $programId = $this->input('training_program_id');

            $programs = TrainingProgram::pluck('id')->toArray();

            $existingProgramsInBatch = Batch::where('number', $batchNumber)
                ->pluck('training_program_id')->toArray();

            if (count(array_diff($programs, $existingProgramsInBatch)) === 0) {
                $validator->errors()->add('number', 'Batch ' . $batchNumber . ' already full.');
            }

            if (in_array($programId, $existingProgramsInBatch)) {
                $validator->errors()->add('training_program_id', 'Training Program ' . TrainingProgram::where('id', $programId)->first()->name . ' already taken in this batch.');
            }
        });
    }

    public function failedValidation(\Illuminate\Contracts\Validation\Validator $validator)
    {
        $errors = $validator->errors()->toArray();

        throw new HttpResponseException(HandleJsonResponseHelpers::res("Error validation", $errors, 422, false));
    }
}
