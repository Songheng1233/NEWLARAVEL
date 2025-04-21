import { useState, useEffect, useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Authcontext } from "../../context/AuthContext";
import { Nav } from "./nav";

const Product = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const { api, user } = useContext(Authcontext);
  const [list, setlist] = useState("list");
  const [category, setCategory] = useState([]);
  const [brand, setBrand] = useState([]);
  const [formdata, setFormdata] = useState({
    title: "",
    category_id: "",
    brand_id: "",
    price: "",
    quantity: "",
    status: 1,
    description: "",
    image: null,
  });
  const param = useParams();
  const handlechange = (e) => {
    setFormdata({
      ...formdata,
      [e.target.id]: e.target.value,
    });
  };
  const handleImageChange = (e) => {
    setFormdata((prev) => ({
      ...prev,
      image: e.target.files[0],
    }));
  };
  const updateproduct = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("title", formdata.title);
      formData.append("category_id", formdata.category_id);
      formData.append("brand_id", formdata.brand_id);
      formData.append("price", formdata.price);
      formData.append("quantity", formdata.quantity);
      formData.append("status", formdata.status);
      formData.append("description", formdata.description);
      formData.append("_method", "PUT");
      if (formdata.image) {
        formData.append("image", formdata.image);
      } else {
        formData.append("old_image", formdata.old_image);
      }

      const response = await fetch(`${api}product/${param.id}`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
        body: formData,
      });

      const json = await response.json();

      if (json.status === 200) {
        fetchproduct();
        setlist("list");

        navigate("/admin/product");
      } else if (json.status === 400) {
        console.error("Validation Errors:", json.errors);
      } else {
        console.error("Error:", json.message);
      }
    } catch (error) {
      console.error("Error adding product", error);
    }
  };

  const addproduct = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", formdata.title);
    formData.append("category_id", formdata.category_id);
    formData.append("brand_id", formdata.brand_id);
    formData.append("price", formdata.price);
    formData.append("quantity", formdata.quantity);
    formData.append("status", formdata.status);
    formData.append("description", formdata.description);
    if (formdata.image) {
      formData.append("image", formdata.image);
    }

    try {
      const response = await fetch(`${api}product`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
        body: formData,
      });
      const data = await response.json();
      if (data.status === 201) {
        setFormdata({
          title: "",
          category_id: "",
          brand_id: "",
          price: "",
          quantity: "",
          status: 1,
          description: "",
          image: null,
          old_image: null,
        });
        fetchproduct();
      }
      // setlist("list")
    } catch (error) {
      console.error(error);
    }
  };

  const deleteproduct = async (id) => {
    try {
      const respone = await fetch(`${api}product/${id}`, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      });
      const data = await respone.json();
      if (data.status === 200) {
        fetchproduct();

        setlist("list");
        navigator("/admin/products");
      }
    } catch (error) {
      console.error("Error adding product", error);
    }
  };

  const fetchcategory = async () => {
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
      setCategory(data.category);
    }
  };
  const fetchbrand = async () => {
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
      setBrand(data.brand);
    }
  };

  const fetchproduct = async () => {
    const response = await fetch(`${api}product`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    });
    const data = await response.json();
    if (data.status === 200) {
      setProducts(data.products);
    }
  };

  const fetchproductbyid = async () => {
    const response = await fetch(`${api}product/${param.id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    });
    const data = await response.json();
    if (data.status === 200) {
      setFormdata({
        title: data.product.title,
        category_id: data.product.category_id,
        brand_id: data.product.brand_id,
        price: data.product.price,
        quantity: data.product.quantity,
        status: data.product.status,
        description: data.product.description,
        old_image: data.product.image,
      });
    }
  };
  useEffect(() => {
    if (param.id) {
      fetchproductbyid();
    } else {
      setFormdata({
        title: "",
        category_id: "",
        brand_id: "",
        price: "",
        quantity: "",
        status: "",
        description: "",
        old_image: null,
      });
    }
  }, [param.id]);
  useEffect(() => {
    fetchproduct();
    fetchcategory();
    fetchbrand();
  }, []);

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
                      Product
                    </h1>
                    <button
                      style={{
                        color: "white",
                        background: "blue",
                        border: "1px solid blue",
                        borderRadius: "7px",
                        padding: "10px",
                      }}
                      onClick={() => setlist("add")}
                    >
                      New
                    </button>
                  </div>
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>CategoryID</th>
                        <th>BrandID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Image</th>
                        <th>Status</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {products.map((item) => (
                        <tr key={item.id}>
                          <td>{item.id}</td>
                          <td>{item.category_id}</td>
                          <td>{item.brand_id}</td>
                          <td>{item.title}</td>
                          <td>{item.price}</td>
                          <td>{item.quantity}</td>
                          <td>
                            <img
                              src={item.image_url}
                              alt=""
                              style={{
                                width: "60px",
                                borderRadius: "0px",
                                height: "20%",
                              }}
                            />
                          </td>

                          {item.status == 1 ? (
                            <td className="text-success">Enable</td>
                          ) : (
                            <td className="text-danger">Disable</td>
                          )}
                          <td>
                            <Link to={`/admin/product/edit/${item.id}`}>
                              {" "}
                              <button
                                className="btn btn-success"
                                onClick={() => setlist("add")}
                              >
                                Edit
                              </button>{" "}
                            </Link>
                            <button
                              className="btn btn-danger"
                              onClick={() => deleteproduct(item.id)}
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
          <div className="row " style={{ marginTop: "50px" }}>
            <div className="col-12 grid-margin">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex justify-content-between  align-items-center">
                    <h1 className="text-white flex-grow-1 text-center">
                      Add Product
                    </h1>
                    <button
                      style={{
                        color: "white",
                        background: "blue",
                        border: "1px solid blue",
                        borderRadius: "7px",
                        padding: "10px",
                      }}
                      onClick={() => setlist("list")}
                    >
                      Back
                    </button>
                  </div>
                  <form
                    className="text-white text-start mt-3"
                    onSubmit={param.id ? updateproduct : addproduct}
                  >
                    <div className="row text-white">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="title">Product Title</label>
                          <input
                            type="text"
                            className="form-control text-white"
                            id="title"
                            value={formdata.title}
                            onChange={handlechange}
                          />
                        </div>

                        <div className="form-group">
                          <label htmlFor="category_id">Category</label>
                          <select
                            className="form-control text-white"
                            id="category_id"
                            value={formdata.category_id}
                            onChange={handlechange}
                          >
                            <option value="">Select Category</option>
                            {category.map((item) => (
                              <option key={item.id} value={item.id}>
                                {item.name}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div className="form-group">
                          <label htmlFor="brand_id">Brand</label>
                          <select
                            className="form-control text-white"
                            id="brand_id"
                            value={formdata.brand_id}
                            onChange={handlechange}
                          >
                            <option value="">Select Brand</option>
                            {brand.map((brand) => (
                              <option key={brand.id} value={brand.id}>
                                {brand.name}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div className="form-group">
                          <label htmlFor="price">Price</label>
                          <input
                            type="text"
                            className="form-control text-white"
                            id="price"
                            value={formdata.price}
                            onChange={handlechange}
                          />
                        </div>
                      </div>

                      {/* Right Column */}
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="quantity">Quantity</label>
                          <input
                            type="text"
                            className="form-control text-white"
                            id="quantity"
                            value={formdata.quantity}
                            onChange={handlechange}
                          />
                        </div>

                        <div className="form-group">
                          <label htmlFor="status">Status</label>
                          <select
                            className="form-control text-white"
                            id="status"
                            onChange={handlechange}
                            value={formdata.status}
                          >
                            <option value="">Select Status</option>
                            <option value="1">Enable</option>
                            <option value="0">Disable</option>
                          </select>
                        </div>

                        <div className="form-group">
                          <label htmlFor="image">Image</label>
                          <input
                            type="file"
                            className="form-control text-white"
                            id="image"
                            onChange={handleImageChange}
                          />
                          {formdata.old_image && (
                            <div className="mt-2">
                              <p>Current Image:</p>
                              <img
                                src={`http://localhost:8000/uploads/${formdata.old_image}`}
                                alt="Current Product"
                                width="100"
                              />
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Full Width Fields */}
                    <div className="form-group">
                      <label htmlFor="description">Description</label>
                      <textarea
                        className="form-control text-white"
                        id="description"
                        value={formdata.description}
                        onChange={handlechange}
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn btn-primary mt-3 d-block "
                    >
                      {param.id ? "Update Product" : "Add Product"}
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

export default Product;
