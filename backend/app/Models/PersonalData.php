<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class PersonalData extends Model
{
    use HasFactory, HasUuids;
    protected $guarded = [];

    public function registration_from(): HasOne
    {
        return $this->hasOne(RegistrationForm::class);
    }
    public function health_info(): HasOne
    {
        return $this->hasOne(HealthInformation::class);
    }
}
