<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use TCG\Voyager\Traits\HasRelationships;
use TCG\Voyager\Traits\Resizable;

class Product extends Model
{
    use Resizable,
        HasRelationships;

    public function product_category()
    {
        return $this->belongsTo('App\ProductCategory');
    }
}
