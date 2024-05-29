<?php

namespace App\Http\Controllers;

use App\Http\Resources\TaskResource;
use App\Interfaces\TaskRepositoryInterface;
use App\Models\Task;
use App\Http\Requests\TaskRequest;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class TaskController extends Controller
{

    public function __construct(protected TaskRepositoryInterface $repository)
    {
    }

    public function index(): AnonymousResourceCollection
    {
        return TaskResource::collection(Task::all());
    }

    public function store(TaskRequest $request): TaskResource
    {
        return $this->repository->store($request);
    }

    public function show(Task $task): TaskResource
    {
        return $this->repository->show($task);
    }

    public function update(TaskRequest $request): TaskResource
    {
        return $this->repository->update($request);
    }

    public function destroy(Task $task): TaskResource
    {
        return $this->repository->delete($task);
    }
}
