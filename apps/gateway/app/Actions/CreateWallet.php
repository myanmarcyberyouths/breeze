<?php

namespace App\Actions;

use App\Models\User;
use App\Support\Payload;
use Junges\Kafka\Facades\Kafka;
use Junges\Kafka\Message\Message;

class CreateWallet
{
    /**
     * @throws \Exception
     */
    public function handle(User $user): void
    {
        $message = new Message(body: createKafkaPayload(
            topic: 'wallets',
            pattern: 'wallets.created',
            data: [
                'user_id' => $user->id,
            ],
        ));
        Kafka::publishOn('wallets')
            ->withMessage($message)
            ->send();
    }
}
