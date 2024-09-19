<?php

namespace App\Imports;

use App\Models\RegistrationForm;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use UnexpectedValueException;

class RegistrationFormImport implements ToModel, WithHeadingRow
{
    /**
     * @param array $row
     *
     * @return \Illuminate\Database\Eloquent\Model|null
     */
    public function model(array $row)
    {
        $possibleKeys = ['Disetujui/Ditolak', 'disetujui/ditolak', 'diestujuiditolak', 'diestujui ditolak', "Disetujui", 'Ditolak'];

        $approvalKey = collect($possibleKeys)->first(function ($key) use ($row) {
            return array_key_exists($key, $row);
        });

        $approvalStatus = strtolower($row[$approvalKey] ?? '');
        $registrationForm = RegistrationForm::where('email', $row['email'])->first();

        if ($registrationForm) {
            $registrationForm->update([
                "approval" => $approvalStatus === 'disetujui'
                    ? 'approved'
                    : ($approvalStatus === 'ditolak'
                        ? 'rejected'
                        : throw new UnexpectedValueException("There is a \"" . ($row[$approvalKey] ?? "unknown") . "\" value in the \"Persetujuan\" column, and it is not allowed. Please enter \"Disetujui\" or \"Ditolak\""))
            ]);

            return $registrationForm;
        }

        return null;
    }
}
