<?php

namespace App\Repositories;

use App\Http\Requests\CompanyRequest;
use App\Http\Requests\TaskRequest;
use App\Http\Resources\TaskResource;
use App\Interfaces\TaskRepositoryInterface;
use App\Models\Company;
use App\Models\Task;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class TaskRepository implements TaskRepositoryInterface
{

    public function index(): AnonymousResourceCollection
    {
        return TaskResource::collection(Task::all());
    }

    public function show(Task $task): TaskResource
    {
        return new TaskResource($task);
    }

    public function store(TaskRequest $request): TaskResource
    {
        $task = Task::create($request->validated());
        return new TaskResource($task);
    }

    public function update(TaskRequest $request): TaskResource
    {
        $task = Task::update($request->validated());
        return new TaskResource($task);
    }

    public function delete(Task $task)
    {
        $task->delete();
        return response()->noContent();
    }
}
