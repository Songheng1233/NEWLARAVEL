import { useContext, useEffect } from "react";
import { Authcontext } from "../../context/AuthContext"; // Adjust the import path as needed
import { useNavigate } from "react-router-dom";

export const Checkadmin = ({ children }) => {
  const navigate = useNavigate(); 
  const { user } = useContext(Authcontext);

  useEffect(() => {
    if (!user) {
      navigate("/admin/login"); 
    }
  }, [user, navigate]); 

  return user ? children : null; 
};
