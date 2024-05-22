<?php

namespace App\Interfaces;

use App\Http\Requests\CompanyRequest;
use App\Http\Requests\TaskRequest;
use App\Models\Company;
use App\Models\Task;

interface TaskRepositoryInterface
{
    public function index();

    public function show(Task $task);

    public function store(TaskRequest $request);

    public function update(TaskRequest $request);

    public function delete(Task $task);
}
