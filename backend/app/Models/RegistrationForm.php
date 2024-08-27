<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class RegistrationForm extends Model
{
    use HasFactory, HasUuids;
    protected $guarded = [];
    public $timestamps = false;

    public function personal_data(): BelongsTo
    {
        return $this->belongsTo(PersonalData::class);
    }
    public function training_program(): BelongsTo
    {
        return $this->belongsTo(TrainingProgram::class);
    }
}
