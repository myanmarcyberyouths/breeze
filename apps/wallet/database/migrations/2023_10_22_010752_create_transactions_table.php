<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('transactions', function (Blueprint $table) {
            $table->uuid('id');
            $table->string('transaction_id')->unique();
            $table->foreignId('from_user');
            $table->foreignId('to_user');

            $table->enum('transaction_type', ['DEPOSIT', 'WITHDRAW']);

            $table->string('transaction_amount');
            $table->string('transaction_currency')->default('MMK');
            $table->string('transaction_description');

            $table->string('from_wallet_id');
            $table->string('to_wallet_id');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('transactions');
    }
};
