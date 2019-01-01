<?php

namespace App;

use Illuminate\Database\Eloquent\Model;


class ProductCategory extends Model
{
    protected $fillable = ['slug', 'name'];

    public function parentId()
    {
        return $this->belongsTo(self::class);
    }
}
