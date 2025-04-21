import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import Dashboard from "./Dashboard";
import { Brand } from "./Brand";
import Product from "./Product";
import { Category } from "./Category";


const Adminroute = () => {
  return (
    <>
    <div class="container-scroller">
    
    <Header/>

    <Routes>
      <Route path="dashboard" element={<Dashboard/>}/>
      <Route path="brand" element={< Brand/>}/>
      <Route path="brand/:id" element={< Brand/>}/>
      <Route path="category" element={<Category/>}/>
      <Route path="category/:id" element={<Category/>}/>
      
      <Route path="product" element={< Product/>}/>
      <Route path="product/edit/:id" element={< Product/>}/>

    </Routes>
    </div>
  

    </>
  );
};

export default Adminroute;