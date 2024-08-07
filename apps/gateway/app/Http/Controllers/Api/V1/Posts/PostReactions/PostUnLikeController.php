<?php

namespace App\Http\Controllers\Api\V1\Posts\PostReactions;

use App\Http\Controllers\Controller;
use App\Models\Event;
use Illuminate\Http\JsonResponse;

class PostUnLikeController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Event $event)
    {
        auth()->user()->unlike($event);

        return new JsonResponse([
            'message' => 'Event disliked successfully',
            'data' => $event->likers()->count(),
        ]);
    }
}
