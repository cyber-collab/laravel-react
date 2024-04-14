<?php

namespace App\Interfaces;

use App\Http\Requests\CompanyRequest;
use App\Models\Company;

interface CompanyRepositoryInterface
{
    public function index();
    public function show(Company $company);
    public function store(CompanyRequest $request);
    public function update(CompanyRequest $request);
    public function delete(Company $company);
}
