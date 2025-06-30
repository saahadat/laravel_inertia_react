<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\PostController;
// Route::get('/', function () {
//     return Inertia::render('Home',['name'=>'shahadat']);
// });

Route::get('/',[PostController::class,'index']);

Route::resource('posts', PostController::class)->except('index');;
    