import { createContext, useState, useEffect } from "react";

export const Authcontext = createContext();

export const Authcontextprovied = ({ children }) => {
  const admininfo = localStorage.getItem("admin")
const api = "http://localhost:8000/api/"

  const [user, setuser] = useState(admininfo ? JSON.parse(admininfo) : null);

  const login = (user) => {
    setuser(user);
    localStorage.setItem("admin",JSON.stringify(user))
  };

  const logout = () => {
    localStorage.removeItem("admin")
    setuser(null);
  };

  const customerlogout = () => {
    // setcustomer(null);
  };

  const customerlogin = (customer) => {
  };

  useEffect(() => {
    const storedAdminInfo = localStorage.getItem("admin");

    if (storedAdminInfo) {
      setuser(JSON.parse(storedAdminInfo));
    }


  }, []);

  return (
    <Authcontext.Provider value={{ login, user, logout, customerlogin, customerlogout,api }}>
      {children}
    </Authcontext.Provider>
  );
};