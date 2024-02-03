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
            $table->foreignId('from_user');
            $table->foreignId('to_user');

            $table->string('transaction_type');

            $table->string('transaction_amount');
            $table->string('transaction_currency')->default('MMK');
            $table->string('transaction_description')->nullable();

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
