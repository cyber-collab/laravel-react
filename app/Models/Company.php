<?php

namespace App\Models;

use Database\Factories\CompanyFactory;
use Eloquent;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Support\Carbon;

/**
 *
 *
 * @property int $id
 * @property string $name
 * @property string $email
 * @property string|null $address
 * @property string|null $website
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * @method static CompanyFactory factory($count = null, $state = [])
 * @method static Builder|Company newModelQuery()
 * @method static Builder|Company newQuery()
 * @method static Builder|Company query()
 * @method static Builder|Company whereAddress($value)
 * @method static Builder|Company whereCreatedAt($value)
 * @method static Builder|Company whereEmail($value)
 * @method static Builder|Company whereId($value)
 * @method static Builder|Company whereName($value)
 * @method static Builder|Company whereUpdatedAt($value)
 * @method static Builder|Company whereWebsite($value)
 * @mixin Eloquent
 */
class Company extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'address', 'email', 'website'];

    public function employees(): HasMany
    {
        return $this->hasMany(Employee::class);
    }
}
