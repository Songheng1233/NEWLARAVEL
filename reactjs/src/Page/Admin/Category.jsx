import React from "react";
import { Nav } from "./nav";
import { useContext, useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Authcontext } from "../../context/AuthContext";

export const Category = () => {
  const param = useParams();
  const navigate = useNavigate();
  const [category, setcategory] = useState([]);
  const { api, user } = useContext(Authcontext);

  const [list, setlist] = useState("list");
  const [formdata, setformdata] = useState({ name: "", status: "" });

  const handlechange = (e) => {
    setformdata({ ...formdata, [e.target.id]: e.target.value });
  };

  const addcategory = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${api}category`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify(formdata),
      });

      const data = await response.json();
      if (data.status === 201) {
        setformdata({ name: "", status: "" });
        setlist("list");
        fetchcategory();
      }
    } catch (error) {
      console.error("Error adding category", error);
    }
  };

  const updatecategory = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${api}category/${param.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify(formdata),
      });

      const data = await response.json();
      if (data.status === 200) {
        setlist("list");
        navigate("/admin/category");
        fetchcategory();
      }
    } catch (error) {
      console.error("Error updating category", error);
    }
  };

  const deletecategory = async (id) => {
    try {
      const response = await fetch(`${api}category/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      });

      const data = await response.json();
      if (data.status === 200) {
        setlist("list");
        fetchcategory();
      }
    } catch (error) {
      console.error("Error deleting category", error);
    }
  };

  const fetchcategory= async () => {
    try {
      const response = await fetch(`${api}category`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      });
      const data = await response.json();
      if (data.status === 200) {
        setcategory(data.category);
      }
    } catch (error) {
      console.error("Error fetching categorys", error);
    }
  };

  const showcategory = async () => {
    if (!param.id) return;
    try {
      const response = await fetch(`${api}category/${param.id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      });
      const data = await response.json();
      if (data.status === 200) {
        setformdata({ name: data.category.name, status: data.category.status });
      }
    } catch (error) {
      console.error("Error fetching category details", error);
    }
  };

  useEffect(() => {
    fetchcategory();
    showcategory();
  }, [param.id]);
  return (
    <>
      <Nav />
      <div className="content-wrapper">
        {list === "list" && (
          <div className="row " style={{ marginTop: "50px" }}>
            <div className="col-12 grid-margin">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex justify-content-between  align-items-center">
                    <h1 className="text-white flex-grow-1 text-center">
                      category
                    </h1>
                    <button
                      style={{
                        color: "white",
                        background: "blue",
                        border: "1px solid blue",
                        borderRadius: "7px",
                        padding: "10px",
                      }}
                      onClick={()=> setlist("add")}
                    >
                      New
                    </button>
                  </div>
                  <table className="table table-bordered table-hover text-white">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody className="text-white">
                      {category.map((item) => (
                 <tr key={item.id} className="text-center">
                   <td className="text-white text-center">{item.id}</td>
                   <td className="text-white text-center">{item.name}</td>
              
                   {item.status == 1 ? (
                     <td className="text-success text-center">Enable</td>
                   ) : (
                     <td className="text-danger text-center">Disable</td>
                   )}
                   <td className='text-center'>
                     <Link to={`/admin/category/edit/${item.id}`}> <button className="btn btn-success" onClick={()=>setlist("add")} >Edit</button> </Link> 
                    <button className="btn btn-danger"onClick={() => deletecategory(item.id)} >Delete</button>
                   </td>
                 </tr>
               ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        )}
        {list === "add" && (
             <div className="row " style={{ marginTop: "50px" }}>
             <div className="col-12 grid-margin">
               <div className="card">
                 <div className="card-body">
                   <div className="d-flex justify-content-between  align-items-center">
                     <h1 className="text-white flex-grow-1 text-center">
                       category
                     </h1>
                     <button
                       style={{
                         color: "white",
                         background: "blue",
                         border: "1px solid blue",
                         borderRadius: "7px",
                         padding: "10px",
                       }}
                       onClick={()=> setlist("list")}
                     >
                       Back
                     </button>
                   </div>
          <form
            onSubmit={param.id ? updatecategory : addcategory}
            className="text-white"
          >
            <div className="form-group text-start">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control text-white"
                id="name"
                value={formdata.name}
                onChange={handlechange}
              />
            </div>

            <div className="form-group text-start">
              <label htmlFor="status">Status</label>
              <select
                className="form-control bg-secondary text-white "
                id="status"
                value={formdata.status}
                onChange={handlechange}
              >
                <option value="">Select Status</option>
                <option value="1">Enable</option>
                <option value="0">Disable</option>
              </select>
            </div>

            <button
              type="submit"
              className=" mt-3"
              style={{
                color: "white",
                background: "blue",
                border: "1px solid blue",
                borderRadius: "7px",
                // marginLeft: "-900px",
              }}
            >
              {param.id ? "Update category" : "Add category"}
            </button>
           
          </form>
        </div>
               </div>
             </div>
           </div>
        )}
      </div>
    </>
  );
};
