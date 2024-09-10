<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;

class RegistrationForm extends Model
{
    use HasFactory, HasUuids;
    protected $guarded = [];

    public function batch(): BelongsTo
    {
        return $this->belongsTo(Batch::class);
    }
    public function sobat_school(): BelongsTo
    {
        return $this->belongsTo(SobatSchool::class);
    }
    public function learning_point(): BelongsTo
    {
        return $this->belongsTo(LearningPoint::class);
    }
    public function health_info(): HasOne
    {
        return $this->hasOne(HealthInformation::class);
    }
}
