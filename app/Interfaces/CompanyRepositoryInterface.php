<?php

namespace App\Interfaces;

use App\Models\Company;

interface CompanyRepositoryInterface
{
    public function index();
    public function show(Company $company);
    public function store(array $data);
    public function update(array $data, Company $company);
    public function delete(Company $company);
}
