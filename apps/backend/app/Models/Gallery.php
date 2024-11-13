<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Gallery extends Model
{
    use HasFactory, HasUuids;

    protected $guarded = [];
    
    public function gallery_category(): BelongsTo
    {
        return $this->belongsTo(GalleryCategory::class);
    }
}
