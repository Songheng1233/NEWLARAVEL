<?php

namespace App\Http\Controllers;

use App\Models\brands;
use Illuminate\Http\Request;

class Adminbrand extends Controller
{
    public function index (Request $request){
        $brand=brands::all();
        return response()->json(
            [
                "status" => 200,
                "brand" =>  $brand
            ]
            );
    }
    public function getbrand (Request $request){
        $brand=brands::all()->where('status',1);
        return response()->json(
            [
                "status" => 200,
                "brand" =>  $brand
            ]
            );
    }
    public function stor (Request $request){
        $brand = new brands();
        $brand->name = $request->name;
        $brand->status = $request->status;
        $brand->save();

        return response()->json([
            "status" => 201,
            "brand" =>  $brand
        ]);

    }
    public function update($id ,Request $request){
        $brand=brands::find($id);

        if(!$brand){
            return response()->json([
                "status" => 404,
            "message" =>  "brand not found"
            ]);
        }
        $brand->name=$request->name;
        $brand->status=$request->status;
        $brand->save();
        return response()->json([
            "status" => 200,
            "brand" =>  $brand
        ]);
    }
    public function show($id,Request $request)
    {
        $brand=brands::find($id);

        if(!$brand){
            return response()->json([
                "status" => 404,
            "message" =>  "brand not found"
            ]);
        }
      
        return response()->json([
            "status" => 200,
            "brand" =>  $brand
        ]);
    }
    public function delete($id ,Request $request){
        $brand=brands::find($id);

        if(!$brand){
            return response()->json([
                "status" => 404,
            "message" =>  "brand not found"
            ]);
        }
        $brand->delete();

        return response()->json([
            "status" => 200,
            "message" =>  "Delete success"
        ]);
    }
}
