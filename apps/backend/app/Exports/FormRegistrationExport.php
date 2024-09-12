<?php

namespace App\Exports;

use App\Models\Batch;
use App\Models\HealthInformation;
use App\Models\LearningPoint;
use App\Models\RegistrationForm;
use App\Models\SobatSchool;
use Carbon\Carbon;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Storage;

class FormRegistrationExport implements FromCollection, WithHeadings
{
    /**
     * @return \Illuminate\Support\Collection
     */
    public function collection()
    {
        $forms = RegistrationForm::get()->toArray();

        return collect($forms)->map(function ($item) {
            $personal_health = HealthInformation::where('registration_form_id', $item['id'])->first()->toArray();

            $healthInfo = !empty($personal_health) ? [
                'Penyakit masa lalu' => $personal_health['past_illnesses'] ?? 'Tidak ada',
                'Berat badan' => $personal_health['weight'],
                'Tinggi badan' => $personal_health['height'],
                'Menggunakan kacamata' => $personal_health['wear_glasses'] ? 'Ya' : 'Tidak',
                'Buta warna' => $personal_health['color_blindness'] ? 'Ya' : 'Tidak',
                'Alamat dan nomor telepon' => $personal_health['address_and_phone_number'],
                'Bersedia di pindah program' => $personal_health['school_transfer_option'] ? 'Ya' : 'Tidak',
                'Foto siswa' => Storage::url($personal_health['student_photo']),
                'Foto ijazah' => Storage::url($personal_health['diploma_photo']),
                'Foto identitas' => Storage::url($personal_health['identity_photo']),
            ] : [];

            $batch = Batch::with(['training_program:id,name'])->where('id', $item['batch_id'])->first();
            return array_merge([
                'Persetujuan*' => $item['approval'] == "approved"
                    ? "Disetujui"
                    : ($item['approval'] == "rejected"
                        ? "Ditolak"
                        : null)
            ], [
                'Nama lengkap' => $item['full_name'],
                'Asal sekolah' => $item['school_of_origin'],
                'Jurusan' => $item['major'],
                'Batch' => $batch->number,
                "Pelatihan program" => $batch->training_program->name,
                'Tempat pendaftaran' => SobatSchool::where('id', $item['sobat_school_id'])->first()->name,
                'Tempat ujian' => LearningPoint::where('id', $item['learning_point_id'])->first()->name,
                'Pola belajar' => $item['learning_pattern'],
                'Bersedia pindah' => $item['is_willing_to_relocate'] ? 'Ya' : 'Tidak',
                'Persetujuan kepatuhan' => $item['compliance_agreement'] ? 'Ya' : 'Tidak',
                'Tempat lahir' => $item['place_of_birth'],
                'Tanggal lahir' => $item['date_of_birth'],
                'Jenis kelamin' => $item['gender'],
                'Alamat' => $item['address'],
                'Nomor telepon' => $item['telephone_number'],
                'Email' => $item['email'],
                'Nomor KTP' => $item['id_card'],
                'Hobi' => $item['hobby'],
                'Jenis sekolah' => $item['school_type'],
                'Tanggal daftar' => Carbon::parse($item['created_at'])->format("d-m-Y H:i:s"),
                'motivasi' => $item['motivation']
            ], $healthInfo);
        });
    }

    /**
     * @return array
     */
    public function headings(): array
    {
        return array_keys($this->collection()->first());
    }
}
