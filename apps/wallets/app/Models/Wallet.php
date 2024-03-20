<?php

namespace App\Models;

use Cknow\Money\Casts\MoneyDecimalCast;
use Cknow\Money\Money;
use Godruoyi\Snowflake\Snowflake;
use Illuminate\Contracts\Container\BindingResolutionException;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;

class Wallet extends Model
{

    protected $fillable = [
        'uuid',
        'name',
        'balance',
        'meta',
        'user_id',
        'currency',
        'deleted_at',
    ];

    protected $casts = [
        'meta' => 'json',
        'balance' => MoneyDecimalCast::class,
    ];


    /**
     * @throws BindingResolutionException
     */
    #[\Override]
    public static function boot(): void
    {
        parent::boot();

        $snowflake = app()->make(Snowflake::class);
        static::creating(function ($model) use ($snowflake) {
            $model->uuid = $snowflake->id();
        });
    }


    public function scopeFindByUuid(Builder $query, string $uuid): Builder
    {
        return $query->where('uuid', $uuid);
    }


}
