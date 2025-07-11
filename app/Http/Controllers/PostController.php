<?php

namespace App\Http\Controllers;


use App\Models\Post;
// use App\Http\Requests\StorePostRequest;
// use App\Http\Requests\UpdatePostRequest;
use Inertia\Inertia;
use Illuminate\Http\Request;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        //return inertia('Home');
        $posts = Post::latest()->paginate(5);
        return Inertia::render('Home', ['name'=>'shahadat','posts'=>$posts]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
        return inertia::render('Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        sleep(2);

        $fields=$request->validate([

            'body'=>['required']

        ]);

        Post::create($fields);

        return redirect('/');

        // dd($request);

    }

    /**
     * Display the specified resource.
     */
    public function show(Post $post)
    {
        //
        return inertia::render('Show',['post'=>$post]);

    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Post $post)
    {
        //
        return inertia("Edit",['post'=>$post]);

    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Post $post)
    {
        //
        sleep(1);
        //dd($post);
        $fields=$request->validate([

            'body'=>['required']

        ]);
        $post->update($fields);
        // Post::create($fields);

        return redirect('/')->with(
            'success','The post is updated'
        );
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Post $post)
    {
        //
        // dd($post);
        $post->delete();

        return redirect('/')->with(
            'message','The post is deleted'
        );

    }
}
