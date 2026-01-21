import React from "react";
import adminpanel from "../assets/img/adminpanel.png";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <div className="div bg-dark text-light" style={{ height: "100vh" }}>
        <img src={adminpanel} className="w-100 bg-warning" alt="" />
        <div className="row">
        <button className="btn btn-warning m-3 mx-auto w-50"><NavLink to="/home" className="fw-bold" style={{textDecoration:"none",color:"white"}}>Landing Page</NavLink></button>
        </div>
        <hr />
        <ul className="">
          <li className="p-3" style={{ listStyle: "none" }}>
            <NavLink to="/adminpanel" className="fw-bold" style={{textDecoration:"none",color:"white"}}>Dashboard</NavLink>
          </li>
          <li className="p-3" style={{ listStyle: "none" }}>
            <NavLink to="/addproduct" className="fw-bold" style={{textDecoration:"none",color:"white"}}>Add Product</NavLink>
          </li>
          <li className="p-3" style={{ listStyle: "none" }}>
            <NavLink to="/productlist" className="fw-bold" style={{textDecoration:"none",color:"white"}}>Product List</NavLink>
          </li>
          <li className="p-3" style={{ listStyle: "none" }}>
            <NavLink to="/" className="fw-bold" style={{textDecoration:"none",color:"white"}}>Setting</NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
