<?php

namespace App\Http\Controllers;

use App\Models\category;
use Illuminate\Http\Request;

class Admincategory extends Controller
{
    public function index (Request $request){
        $category=category::all();
        return response()->json([
            "status" => 200,
            "category" => $category
        ]);

    } 
    public function store (Request $request){
        $category=new category();
        $category->name = $request->name;
        $category->status = $request->status;
        $category->save();
        return response()->json([
            "status" => 201,
            "category" => $category

        ]);
    }
    public function update ($id,Request $request){
        $category=category::find($id);

        if(!$category){
            return response()->json([
                "status" => 404,
                "msg" => "category not found "
            ]);
        }

        $category->name= $request->name;
        $category->status= $request->status;
        $category->save();
        return response()->json([
            "status" => 400,
            "msg" =>"category was successfully!"

        ]);
    }

    public function Delete ($id,Request $request) {
        $category=category::find($id);
        $category->delete($id);
        return Response ()->json([
            "status " =>200,
            "msg" =>"Delete was successfully!"
 


        ]);
        

           }

}
