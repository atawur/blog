<?php

    namespace App\Http\Controllers;

    use App\Post;
    use Illuminate\Http\Request;
    use Illuminate\Support\Facades\Hash;
    use Illuminate\Support\Facades\Validator;
    use JWTAuth;
    use Tymon\JWTAuth\Exceptions\JWTException;

    class PostController extends Controller
    {
        

        public function save_post(Request $request)
        {
                $validator = Validator::make($request->all(), [
                'title' => 'required|string|max:255',
                'sort_description' => 'required|string|max:500',
                
            ]);

            if($validator->fails()){
                return response()->json([
                    'status' => 'error',
                    'msg'    => 'Error',
                    'errors' => $validator->errors(),
                ], 400);
                   // return response()->json($validator->errors()->toJson(), 400);
            }

            $post = Post::create([
                'title' => $request->get('title'),
                'sort_description' => $request->get('sort_description'),
                'details' => $request->get('sort_description')
            ]);

            return response()->json([
                'status' => 'success',
                'msg'    => 'Success Fully Added',
                'errors' => '',
            ], 200);

            //return response()->json(),201);
        }

        public function all_post(){
            $posts = Post::all();
            return response()->json($posts,200);
        }
        
    }