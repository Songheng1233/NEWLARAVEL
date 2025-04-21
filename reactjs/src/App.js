import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { CartProvider } from "./context/CartContext"; // Import CartProvider
import Customer from "./components/Customer";
import Adminroute from "./Page/Admin/Adminroute";
import Login from "./Page/Admin/Login";
import { Checkadmin } from "./Page/Admin/Checkadmin";

function App() {
  const location = useLocation();

  useEffect(() => {
    const customerStylesheet = "/css/style.css";
    const style1 = "/vendors/mdi/css/materialdesignicons.min.css";
    const style2 = "/vendors/css/vendor.bundle.base.css";
    let link = document.getElementById("customer-style");
    let link1 = document.getElementById("style1");
    let link2 = document.getElementById("style2");

    if (location.pathname.startsWith("/admin")) {
      if ( !link && !link1 && !link2) {
        link1 = document.createElement("link");
        link1.id = "style1";
        link1.rel = "stylesheet";
        link1.href = style1;
        document.head.appendChild(link1);
        link2 = document.createElement("link");
        link2.id = "style2";
        link2.rel = "stylesheet";
        link2.href = style2;
        document.head.appendChild(link2);

        link = document.createElement("link");
        link.id = "customer-style";
        link.rel = "stylesheet";
        link.href = customerStylesheet;
        document.head.appendChild(link);

       
      }
    } else {
      if (  link ) {
        // linkElement.remove();
        link1.remove();
        link2.remove();
        link.remove();
      }
    }
  }, [location.pathname]);

  return (
    <CartProvider>
      <Routes>
        <Route path="/*" element={<Customer />} />
        <Route path="/admin/*" element={
          <Checkadmin>
          <Adminroute />
          </Checkadmin>
        }
           />
        <Route path="/admin/login" element={<Login/>}/>
        
      </Routes>
    </CartProvider>
  );
}

export default App;
