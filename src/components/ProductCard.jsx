import axios from "axios";
import React, { useEffect, useState } from "react";

const ProductCard = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8087/product/viewproduct"
      );
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);


  return (
    <>
      <div className="row mt-5">
        <h1 className="text-center">Products List</h1>
        <div class="table-responsive mt-4">
          <table class="table table-hover">
            <thead>
              <tr>
                <th scope="col">Sr. No.</th>
                <th scope="col">Product Name</th>
                <th scope="col">Product Price</th>
                <th scope="col">Product Description</th>
                <th scope="col">Product Colour</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item,index) => {
                return (
                  <>
                    <tr class="">
                      <td scope="row" key={index}>{index+1}</td>
                      <td>{item.productname}</td>
                      <td>{item.productprice}</td>
                      <td>{item.productdes}</td>
                      <td>{item.color}</td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
