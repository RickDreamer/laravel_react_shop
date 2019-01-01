<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});
Route::get('/api/home', 'Api\PageController@home');
Route::get('/api/post/{slug}', 'Api\PageController@one_post');


Route::group(['prefix' => 'admin'], function () {
    Voyager::routes();
});
 