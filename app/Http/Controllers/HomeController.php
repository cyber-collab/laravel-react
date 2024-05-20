<?php

namespace App\Http\Controllers;

use App\Interfaces\MessageRepositoryInterface;
use App\Models\Message;
use App\Models\User;
use Illuminate\Contracts\View\Factory;
use Illuminate\Contracts\View\View;
use Illuminate\Foundation\Application;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function __construct(protected MessageRepositoryInterface $messageRepository)
    {
//        $this->middleware('auth');
    }

    public function index(): \Illuminate\Contracts\Foundation\Application|Factory|View|Application
    {
        $user = User::where('id', auth()->user()->id)
            ->select(['id', 'name', 'email'])->first();

        return view('home', ['user' => $user]);
    }

    public function messages(): JsonResponse
    {
        $messages = Message::with('user')->get()->append('time');

        return response()->json($messages);
    }

    public function message(Request $request): JsonResponse
    {
        $this->messageRepository->create($request);

        return response()->json([
            'success' => true,
            'message' => 'Message created and job dispatched.'
        ]);
    }
}
