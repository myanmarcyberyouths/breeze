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
        Schema::create('events', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->date('start_date');
            $table->time('start_time');
            $table->time('end_time');
            $table->string('place');
            $table->json('co_organizers')->nullable();
            $table->text('description');
            $table->json('interests');


//            $table->enum('visibility', [
//                'public',
//                'private',
//                'unlisted',
//            ])->default('public');
            $table->foreignId('user_id');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('events');
    }
};
