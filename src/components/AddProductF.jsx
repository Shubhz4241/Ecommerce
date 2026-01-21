import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddProductF = () => {
  const [formdata, setFormdata] = useState({
    productname: "",
    productprice: "",
    productdes: "",
    color: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormdata({ ...formdata, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await axios.post(
      "http://localhost:8087/product/addproduct",
      formdata
    );
    alert("Product Added Successfully!")
  };

  return (
    <>
      <div className="row">
        <div className="col-lg-3"></div>
        <div className="col-lg-6 mt-5 p-5 shadow">
          <h1 className="text-center">Add Product</h1>
          <form onSubmit={handleSubmit} className="p-3">
            <label htmlFor="" className="p-2">
              Product Name
            </label>
            <br />
            <input
              type="text "
              name="productname"
              className="w-100 border-0 bg-light"
              onChange={handleChange}
              value={formdata.productname}
            />
            <br />
            <label htmlFor="" className="p-2">
              Product Price
            </label>
            <br />
            <input
              type="text"
              name="productprice"
              className="w-100 border-0 bg-light"
              onChange={handleChange}
              value={formdata.productprice}
            />
            <br />
            <label htmlFor="" className="p-2">
              Product Description
            </label>
            <br />
            <input
              type="text"
              name="productdes"
              className="w-100 border-0 bg-light"
              onChange={handleChange}
              value={formdata.productdes}
            />
            <br />
            <label htmlFor="" className="p-2">
              Product Colour
            </label>
            <br />
            <input
              type="text"
              name="color"
              className="w-100 border-0 bg-light"
              onChange={handleChange}
              value={formdata.color}
            />
            <br />
            <div className="row">
              <button className="btn btn-primary p-1 mt-3 w-50 mx-auto">
                Add Product
              </button>
            </div>
          </form>
        </div>
        <div className="col-lg-3"></div>
      </div>
    </>
  );
};

export default AddProductF;
