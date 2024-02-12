<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Kreait\Firebase\Contract\Messaging;
use Kreait\Firebase\Exception\FirebaseException;
use Kreait\Firebase\Exception\MessagingException;
use Kreait\Firebase\Messaging\AndroidConfig;
use Kreait\Firebase\Messaging\CloudMessage;

class SendFirebasePushNotification implements ShouldQueue, ShouldBeUnique
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    public int $uniqueFor = 60;

    public function __construct(
        private readonly array $data
    )
    {
        //
    }


    /**
     * @throws MessagingException
     * @throws FirebaseException
     */
    public
    function handle(Messaging $messaging): void
    {

        $topicMessage = CloudMessage::fromArray([
            'topic' => $this->data['notification_id'],
            'notification' => [
                'title' => $this->data['channels']['push']['title'],
                'body' => $this->data['channels']['push']['body'],
                'image' => $this->data['channels']['push']['image'] ?? null,
            ],
            'data' => $this->data['data'] ?? [],
        ]);

        $messaging->send($topicMessage);
    }

    public function uniqueId()
    {
        return $this->data['uuid'];
    }
}
