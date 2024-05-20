<?php

namespace App\Repositories;

use App\Interfaces\MessageRepositoryInterface;
use App\Jobs\SendMessage;
use App\Models\Message;
use Illuminate\Http\Request;

class MessageRepository implements MessageRepositoryInterface
{
    public function create(Request $request)
    {
        $message = Message::create([
            'user_id' => auth()->user()->id,
            'text' => $request->get('text'),
        ]);

        SendMessage::dispatch($message);
    }
}
