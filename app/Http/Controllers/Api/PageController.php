<?php

namespace App\Http\Controllers\Api;

use TCG\Voyager\Models\Post;
use TCG\Voyager\Models\Page;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class PageController extends Controller
{
    public function home(){ 
			$posts = Post::where('status', 'PUBLISHED')->get();
			return response()->json($posts);
		}
	
	public function one_post($slug){
		$post = Post::where('slug', $slug)->first();
		return response()->json($post);
	}
}
