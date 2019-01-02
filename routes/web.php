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
Route::get('/api/last-articles', 'Api\PageController@last_articles');
Route::get('/api/main-slider', 'Api\PageController@slides');
Route::get('/api/products', 'Api\PageController@products');
Route::post('/api/add-to-cart', 'Api\PageController@add_to_cart');




Route::group(['prefix' => 'admin'], function () {
    Voyager::routes();
});
 