import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Authcontext } from '../../context/AuthContext';

const Login = () => {
    const {api,login} = useContext(Authcontext)
    const [formData, setFormData] = useState({
        email: "",
        password:""
      });
      const navigate = useNavigate();

    
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.id]: e.target.value, 
        });
      };

      const handlelogin = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${api}login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept : "application",
                    },
                    body: JSON.stringify(formData),
                    });
                    const data = await response.json();
                    console.log(data);
                    
                    if(data.status === 200){
                          const admininfo={
                            token: data.token,
                            name: data.data.name,
                            email: data.data.email,
                          }  
                        login(admininfo)
                        navigate("/admin/dashboard")
                        
                        }
                        } catch (error) {
                            console.error(error);
                        }
    }
  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
    <div className="card p-4 shadow" style={{ width: "400px" }}>
      <h2 className="text-center mb-4">Login to Your Account</h2>
      <form onSubmit={handlelogin}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            className="form-control"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="form-control"
            placeholder="Enter your email"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-dark w-100">
          Login
        </button>
      </form>
     
    </div>
  </div>
  )
}

export default Login