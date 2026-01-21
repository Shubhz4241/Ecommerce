import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="">
        <nav className="">
          <ul className="nav justify-content-center gap-5 p-2 bg-dark ">
            <li className="nav-item">
              <NavLink className="nav-link text-white fw-bold">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white fw-bold">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white fw-bold">Products</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white fw-bold">Menu</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white fw-bold">Contact Us</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
