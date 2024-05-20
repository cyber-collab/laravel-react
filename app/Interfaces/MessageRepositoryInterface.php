<?php

namespace App\Interfaces;

use Illuminate\Http\Request;

interface MessageRepositoryInterface
{
    public function create(Request $request);
}
