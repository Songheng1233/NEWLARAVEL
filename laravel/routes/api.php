<?php

use App\Http\Controllers\Adminauth;
use App\Http\Controllers\Adminbrand;
use App\Http\Controllers\Admincategory;
use App\Http\Controllers\Adminproduct;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');
Route::post("login",[Adminauth::class,"login"]);

Route::group(["middleware"=>'auth:api'] , function() {
    Route::get("category",[Admincategory::class,"index"]);
    Route::put("category/{id}",[Admincategory::class,"update"]);
    Route::delete("category/{id}",[Admincategory::class,"Delete"]);
    Route::get("product",[Adminproduct::class,"index"]);
    Route::put("product/{id}",[Adminproduct::class,"update"]);
    Route::delete("product/{id}",[Adminproduct::class,"Delete"]);
    Route::get("brand",[Adminbrand::class,"index"]);
    Route::put("brand/{id}",[Adminbrand::class,"update"]);
    Route::delete("brand/{id}",[Adminbrand::class,"Delete"]);

    

    




    
    
    



   

    
 

    


});