<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class GalleryCategory extends Model
{
    use HasFactory, HasUuids;
    protected $guarded = [];

    public function gallery(): HasMany
    {
        return $this->hasMany(Gallery::class, 'gallery_category_id','id');
    }
}
