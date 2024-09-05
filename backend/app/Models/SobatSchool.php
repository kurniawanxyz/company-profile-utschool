<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class SobatSchool extends Model
{
    use HasFactory, HasUuids;
    protected $guarded = [];

    public function registration_schedule(): HasMany
    {
        return $this->hasMany(RegistrationSchedule::class, 'id');
    }
    public function registrationSchedules()
    {
        return $this->belongsToMany(RegistrationSchedule::class, 'registration_schedule_sobat_school', 'sobat_school_id', 'reg_sched_id');
    }
}
