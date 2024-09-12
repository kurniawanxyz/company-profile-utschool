<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class RegistrationSchedule extends Model
{
    use HasFactory, HasUuids;
    protected $guarded = [];
    public function batch(): BelongsTo
    {
        return $this->belongsTo(Batch::class);
    }
    public function training_program(): BelongsTo
    {
        return $this->belongsTo(TrainingProgram::class);
    }
    public function learning_point(): BelongsTo
    {
        return $this->belongsTo(LearningPoint::class);
    }
    public function sobatSchool()
    {
        return $this->belongsToMany(SobatSchool::class, 'registration_schedule_sobat_school', 'reg_schedule_id', 'sobat_school_id');
    }

}
