import React from "react";
import bg from "../assets/img/bg.png"

const Herosection = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row ">
          <div className="col-lg-6 p-5">
            <h1 className="fw-bold mt-5" style={{ fontSize: "5rem" }}>
              Indias Leading <span className="text-warning">Ecommerce</span>{" "}
              Platform
            </h1>
            <button className="btn btn-dark p-2 mt-5 fs-5 ">Know more</button>
          </div>
          <div className="col-lg-6 ">
            <img className="img-fluid" style={{width:"120vh",height:"92vh"}} src={bg} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Herosection;
