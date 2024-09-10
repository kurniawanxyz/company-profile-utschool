<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class LearningPoint extends Model
{
    use HasFactory, HasUuids;
    protected $guarded = [];

    public function registration_schedule(): HasMany
    {
        return $this->hasMany(RegistrationSchedule::class, 'id');
    }

    public function registrationSchedules()
    {
        return $this->belongsToMany(RegistrationSchedule::class, 'registration_schedule_learning_point', 'learning_point_id', 'reg_sched_id');
    }

    public function sobatSchool(): BelongsToMany
    {
        return $this->belongsToMany(SobatSchool::class, 'reg_sched_learn_point_sobat_school', 'rgsch_lp_id', 'sobat_school_id');
    }

}
