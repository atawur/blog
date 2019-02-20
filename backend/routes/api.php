<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
///api/users/register
Route::post('/users/register', 'UserController@register');
Route::post('/users/login', 'UserController@authenticate');
Route::get('open', 'DataController@open');
Route::get('/users/activateaccount', 'UserController@activateaccount');
// routes for for post
Route::post('/post/save_post', 'PostController@save_post');
Route::get('/post', 'PostController@all_post');
Route::group(['middleware' => ['jwt.verify']], function() {
    Route::get('user', 'UserController@getAuthenticatedUser');
    Route::get('closed', 'DataController@closed');
});