<?php

namespace App\Http\Controllers\Api\V1\Posts;

use App\Http\Controllers\Controller;
use App\Http\Requests\V1\EventUpdateRequest;
use App\Http\Resources\V1\EventResource;
use App\Models\Event;

class PostUpdateController extends Controller
{
    public function __invoke(EventUpdateRequest $request, Event $event)
    {
        $data = $request->validated();
        $data['date'] = date('Y-m-d', strtotime($data['date']));
        $data['time'] = date('H:i:s', strtotime($data['time']));

        $event->update($data);

        //        $event->phases()->update($data['phases']);
        //        $event->interests()->sync($data['interests']);

        //        $event->phases->map(function ($phase, $index) use ($data) {
        //            $phase->tickets()->update($data['phases'][$index]['tickets']);
        //        });

        if (isset($data['image'])) {
            $event->clearMediaCollection('event-images');
            $event->addMediaFromBase64($data['image'])
                ->toMediaCollection('event-images');
        }

        return new EventResource($event);
    }
}
