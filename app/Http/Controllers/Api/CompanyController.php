<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\CompanyRequest;
use App\Http\Resources\CompanyResource;
use App\Interfaces\CompanyRepositoryInterface;
use App\Models\Company;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Illuminate\Http\Response;

class CompanyController extends Controller
{
    public function __construct(protected CompanyRepositoryInterface $companyRepository)
    {
    }

    /**
     * Display a listing of the resource.
     */
    public function index(): AnonymousResourceCollection
    {
       return $this->companyRepository->index();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(CompanyRequest $request): CompanyResource
    {
        return $this->companyRepository->store($request);
    }

    /**
     * Display the specified resource.
     */
    public function show(Company $company): CompanyResource
    {
        return $this->companyRepository->show($company);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(CompanyRequest $request): CompanyResource
    {
        return $this->companyRepository->update($request);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Company $company): Response
    {
        return $this->companyRepository->delete($company);
    }
}
