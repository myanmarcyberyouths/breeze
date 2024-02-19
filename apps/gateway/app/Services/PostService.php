<?php

namespace App\Services;

use App\Http\Requests\V1\EventRequest;
use App\Repositories\PostRepository;

class PostService
{
    public function __construct(
        private readonly PostRepository $eventRepository
    ) {
    }

    /**
     * @throws \Exception
     */
    public function createEvent(EventRequest $request): void
    {
        $this->eventRepository->createEvent($request);
    }
}