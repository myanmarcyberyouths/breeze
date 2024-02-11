<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Kreait\Firebase\Contract\Messaging;
use Kreait\Firebase\Messaging\CloudMessage;

class SendFirebasePushNotification implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;


    public function __construct(
        private readonly array $data
    )
    {
        //
    }


    public
    function handle(Messaging $messaging): void
    {
        $topicMessage = CloudMessage::fromArray([
            'topic' => $this->data['notification_id'],
            'notification' => [
                'title' => $this->data['channels']['push']['title'],
                'body' => $this->data['channels']['push']['body'],
                'data' => $this->data['data'] ?? [],
            ],
        ]);
        $messaging->send($topicMessage);
    }
}
