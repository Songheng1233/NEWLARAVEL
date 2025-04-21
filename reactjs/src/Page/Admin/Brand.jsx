
import React, { useContext, useEffect, useState } from "react";
import { Nav } from "./nav";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Authcontext } from "../../context/AuthContext";

export const Brand = () => {
  const { api, user } = useContext(Authcontext);
  const param = useParams();
  const navigate = useNavigate();
  const isEdit = Boolean(param.id);

  const [brand, setBrand] = useState([]);
  const [list, setList] = useState("list");
  const [formdata, setFormData] = useState({ name: "", status: "" });

  const handleChange = (e) => {
    const value = e.target.id === "status" ? parseInt(e.target.value) : e.target.value;
    setFormData({ ...formdata, [e.target.id]: value });
  };

  const validateForm = () => {
    if (!formdata.name || formdata.status === "") {
      alert("Please fill all fields.");
      return false;
    }
    return true;
  };

  const addBrand = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const response = await fetch(`${api}brand`, {
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
        setFormData({ name: "", status: "" });
        setList("list");
        fetchBrand();
      }
    } catch (error) {
      console.error("Error adding brand", error);
    }
  };

  const updateBrand = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const response = await fetch(`${api}brand/${param.id}`, {
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
        setList("list");
        navigate("/admin/brand");
        fetchBrand();
      }
    } catch (error) {
      console.error("Error updating brand", error);
    }
  };

  const deleteBrand = async (id) => {
    try {
      const response = await fetch(`${api}brand/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      });

      const data = await response.json();
      if (data.status === 200) {
        fetchBrand();
      }
    } catch (error) {
      console.error("Error deleting brand", error);
    }
  };

  const fetchBrand = async () => {
    try {
      const response = await fetch(`${api}brand`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      });
      const data = await response.json();
      if (data.status === 200) {
        setBrand(data.brand.sort((a, b) => a.id - b.id));
      }
    } catch (error) {
      console.error("Error fetching brands", error);
    }
  };

  const showBrand = async () => {
    if (!isEdit) return;

    try {
      const response = await fetch(`${api}brand/${param.id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      });
      const data = await response.json();
      if (data.status === 200) {
        setFormData({
          name: data.brand.name,
          status: parseInt(data.brand.status),
        });
        setList("add");
      }
    } catch (error) {
      console.error("Error fetching brand details", error);
    }
  };

  useEffect(() => {
    fetchBrand();
    showBrand();
  }, [param.id]);

  return (
    <>
      <Nav />
      <div className="content-wrapper">
        {list === "list" && (
          <div className="row" style={{ marginTop: "50px" }}>
            <div className="col-12 grid-margin">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center">
                    <h1 className="text-white flex-grow-1 text-center">Brand</h1>
                    <button
                      style={{
                        color: "white",
                        background: "blue",
                        border: "1px solid blue",
                        borderRadius: "7px",
                        padding: "10px",
                      }}
                      onClick={() => setList("add")}
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
                      {brand.map((item) => (
                        <tr key={item.id} className="text-center">
                          <td>{item.id}</td>
                          <td>{item.name}</td>
                          <td className={item.status === 1 ? "text-success" : "text-danger"}>
                            {item.status === 1 ? "Enable" : "Disable"}
                          </td>
                          <td>
                            <Link to={`/admin/brand/edit/${item.id}`}>
                              <button className="btn btn-success">Edit</button>
                            </Link>
                            <button
                              className="btn btn-danger ms-2"
                              onClick={() => deleteBrand(item.id)}
                            >
                              Delete
                            </button>
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
          <div className="row" style={{ marginTop: "50px" }}>
            <div className="col-12 grid-margin">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center">
                    <h1 className="text-white flex-grow-1 text-center">
                      {isEdit ? "Edit Brand" : "Add Brand"}
                    </h1>
                    <button
                      style={{
                        color: "white",
                        background: "blue",
                        border: "1px solid blue",
                        borderRadius: "7px",
                        padding: "10px",
                      }}
                      onClick={() => {
                        setFormData({ name: "", status: "" });
                        setList("list");
                        navigate("/admin/brand");
                      }}
                    >
                      Back
                    </button>
                  </div>
                  <form
                    onSubmit={isEdit ? updateBrand : addBrand}
                    className="text-white"
                  >
                    <div className="form-group text-start">
                      <label htmlFor="name">Name</label>
                      <input
                        type="text"
                        className="form-control text-white"
                        id="name"
                        value={formdata.name}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="form-group text-start">
                      <label htmlFor="status">Status</label>
                      <select
                        className="form-control bg-secondary text-white"
                        id="status"
                        value={formdata.status}
                        onChange={handleChange}
                      >
                        <option value="">Select Status</option>
                        <option value={1}>Enable</option>
                        <option value={0}>Disable</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      className="mt-3"
                      style={{
                        color: "white",
                        background: "blue",
                        border: "1px solid blue",
                        borderRadius: "7px",
                      }}
                    >
                      {isEdit ? "Update Brand" : "Add Brand"}
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
