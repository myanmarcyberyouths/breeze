<?php

use App\Http\Controllers\CreateCommentReplyController;
use App\Http\Controllers\CreateCommentController;
use App\Http\Controllers\GetAllRepliesByParentPostId;
use App\Http\Controllers\GetCommentByPostId;
use App\Http\Controllers\GetCommentLikeByCommentIdController;
use App\Http\Controllers\LikeCommentController;
use App\Http\Controllers\UnLikeCommentController;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:api')->group(function () {

    Route::get('/comments', GetCommentByPostId::class);
    Route::post('/comments', CreateCommentController::class);

    Route::get('/comments/{comment}/replies', GetAllRepliesByParentPostId::class);
    Route::post('/comments/{comment}/replies', CreateCommentReplyController::class);

    Route::post('/comments/{comment}/like', LikeCommentController::class);
    Route::delete('/comments/{comment}/unlike', UnLikeCommentController::class);

    Route::get('/comments/{comment}/likers', GetCommentLikeByCommentIdController::class);
});
