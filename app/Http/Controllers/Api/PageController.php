<?php

namespace App\Http\Controllers\Api;

use TCG\Voyager\Models\Post;
use TCG\Voyager\Models\Page;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Product;

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

	public function last_articles(){
		$last_posts = Post::where('status', 'PUBLISHED')->orderBy('id', 'desc')->take(4)->get();
		return response()->json($last_posts);
	}
	public function slides(){
		$slides = Post::where('status','PUBLISHED')->where('in_main',1)->get();
		return response()->json($slides);
	}
	public function products(){
		$products = Product::all();
		return response()->json($products);
	}
	public function add_to_cart(){
		$response = [
			'active' => true, 'message' => 'Product added to cart!'
		];
		return response()->json($response);
	}
}
