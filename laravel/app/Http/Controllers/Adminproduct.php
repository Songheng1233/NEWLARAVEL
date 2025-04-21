<?php

namespace App\Http\Controllers;

use App\Models\prodcut;
use App\Models\product;
use Illuminate\Http\Request;

class Adminproduct extends Controller
{
    public function index(Request $request)
    {
        $products = prodcut::all();

        return response()->json([
            "status" => 200,
            "products" =>  $products
        ]);
    }
    public function store (Request $request)
    {
       
        
        $image = $request->file('image');
        $imageName = time().'.'.$request->image->extension();  
        $image->move(public_path('/uploads'), $imageName);

        $product = new prodcut();
        $product->category_id = $request->category_id;
        $product->brand_id = $request->brand_id;
        $product->title = $request->title;
        $product->price = $request->price;
        $product->quantity = $request->quantity;
        $product->image = $imageName;
        $product->description = $request->description;
        $product->status = $request->status;
        $product->save();

        return response()->json([
            "status" => 201,
            "product" =>  $product
        ]);
    }
    public function getsingleproduct ($id,Request $request){
        $product = prodcut::find($id);

        if(!$product){
            return response()->json([
                "status" => 404,
                "message" => "product not found with id $id"

            ]);
        };

        return response()->json([
            "status" => 200,
            "product" => $product
        ]);
    }
    public function update($id, Request $request)
    {
        $product = prodcut::find($id);
    
        if (!$product) {
            return response()->json([
                "status" => 404,
                "message" => "Product not found"
            ]);
        }
    
        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $imageName = time() . '.' . $image->getClientOriginalExtension();
            $image->move(public_path('/uploads'), $imageName);
    
            // Delete old image if it exists
            if ($product->image && file_exists(public_path('/uploads' . $product->image))) {
                unlink(public_path('/uploads' . $product->image));
            }
    
            $product->image = $imageName;
        }
    
        $product->category_id = $request->category_id;
        $product->brand_id = $request->brand_id;
        $product->title = $request->title;
        $product->price = $request->price;
        $product->quantity = $request->quantity;
        $product->description = $request->description;
        $product->status = $request->status;
        $product->save();
    
        return response()->json([
            "status" => 200,
            "product" => $product
        ]);
    }
    public function delete($id,Request $request)
    {
        $product = prodcut::find($id);

        if(!$product){
            return response()->json([
                "status" => 404,
                "message" =>  "product not found"
            ]);
        };

        $product->delete();

        return response()->json([
            "status" => 200,
            "message" =>  "product deleted successfully"
        ]);
    }
    

}
