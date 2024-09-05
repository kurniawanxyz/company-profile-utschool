<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Batch extends Model
{
    use HasFactory, HasUuids;
    protected $guarded = [];

    public function training_program(): BelongsTo
    {
        return $this->belongsTo(TrainingProgram::class);
    }

    public function registration_schedule(): HasMany
    {
        return $this->hasMany(RegistrationSchedule::class, 'id');
    }
}
