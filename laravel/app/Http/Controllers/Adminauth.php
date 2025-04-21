<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class Adminauth extends Controller
{
    public function register (Request $request){


        $user = new User();
        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = bcrypt($request->password);
        $user->save();

        return response()->json([
            "status" => 201,
            'message' => "user register successful"
        ]);
        
    }


    public function login(Request $request)
{
  
    $credentials = request(['email', 'password']);

    if (! $token = auth("api")->attempt($credentials)) {
        return response()->json(['error' => 'Unauthorized'], 401);
    }
    return response()->json([
        "data" => auth("api")->user(),
        "token" => $token,
        "status" => 200
    ]);
}
    //
}
