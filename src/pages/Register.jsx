import axios from "axios";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Register = () => {
  const [formdata, setFormdata] = useState({
    email: "",
    fullname: "",
    phone: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormdata({ ...formdata, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await axios.post("http://localhost:8087/admin/register", formdata);
    console.log(res.data.fullname);
    localStorage.setItem("name",res.data.name)
    navigate("/");
  };

  return (
    <>
      <div className="p-5" style={{ height: "97vh", backgroundColor: "black" }}>
        <div className="row p-5 ">
          <div className="col-lg-4"></div>
          <div className="col-lg-4">
            <div class="card mx-auto">
              <div class=" text-dark fw-bold fs-2 text-center mt-3">
                Hey! Admin
              </div>
              <div class="card-body">
                <h4 class="card-title text-center">Register Here</h4>
                <form onSubmit={handleSubmit} className="p-3">
                  <label htmlFor="" className="p-2">
                    Email
                  </label>
                  <br />
                  <input
                    type="text "
                    name="email"
                    className="w-100 border-0 bg-light"
                    onChange={handleChange}
                    value={formdata.email}
                  />
                  <br />
                  <label htmlFor="" className="p-2">
                    Full Name
                  </label>
                  <br />
                  <input
                    type="text"
                    name="fullname"
                    className="w-100 border-0 bg-light"
                    onChange={handleChange}
                    value={formdata.fullname}
                  />
                  <br />
                  <label htmlFor="" className="p-2">
                    Phone
                  </label>
                  <br />
                  <input
                    type="text"
                    name="phone"
                    className="w-100 border-0 bg-light"
                    onChange={handleChange}
                    value={formdata.phone}
                  />
                  <br />
                  <label htmlFor="" className="p-2">
                    Set Password
                  </label>
                  <br />
                  <input
                    type="text"
                    name="password"
                    className="w-100 border-0 bg-light"
                    onChange={handleChange}
                    value={formdata.password}
                  />
                  <br />
                  <label htmlFor="" className="p-2">
                    Confirm Password
                  </label>
                  <br />
                  <input
                    type="text"
                    className="w-100 border-0 bg-light"
                    onChange={handleChange}
                    
                  />
                  <br />
                  <div className="row">
                    <button className="btn btn-primary p-1 mt-3 w-50 mx-auto">
                      Register Here
                    </button>
                  </div>
                </form>
              </div>
              <div class="card-footer text-muted text-center ">
                Already Register?
                <a href="" className="mx-3"></a>
                <NavLink to="/">Login here</NavLink>
              </div>
            </div>
          </div>
          <div className="col-lg-4"></div>
        </div>
      </div>
    </>
  );
};

export default Register;
