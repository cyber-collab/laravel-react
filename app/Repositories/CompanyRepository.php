<?php

namespace App\Repositories;

use App\Http\Requests\CompanyRequest;
use App\Http\Resources\CompanyResource;
use App\Interfaces\CompanyRepositoryInterface;
use App\Models\Company;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Illuminate\Http\Response;

class CompanyRepository implements CompanyRepositoryInterface
{
    public function index(): AnonymousResourceCollection
    {
        return CompanyResource::collection(Company::all());
    }

    public function show(Company $company): CompanyResource
    {
        return new CompanyResource($company);
    }

    public function store(CompanyRequest $request): CompanyResource
    {
        $company = Company::create($request->validated());
        return new CompanyResource($company);
    }

    public function update(CompanyRequest $request): CompanyResource
    {
        $company = Company::update($request->validated());
        return new CompanyResource($company);
    }

    public function delete(Company $company): Response
    {
        $company->delete();
        return response()->noContent();
    }
}
