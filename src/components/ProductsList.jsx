import React, { useEffect, useState } from 'react'
import img from '../assets/img/16plus.jpeg'
import axios from 'axios';


const ProductsList = () => {
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
      <div className="row mt-5 gap-3">
        <div className="col-lg-2  m-3">
            <div
                class="card text-white bg-dark"
            >
                <img class="card-img-top" src={img} alt="Title" />
                <div class="card-body text-center">
                    <h4 class="card-title">Iphone 16 Plus</h4>
                    <p class="card-text ">512GB ,Blue</p>
                    <p className='btn btn-warning'>Details</p>
                </div>
            </div>
        </div>
        <div className="col-lg-2 m-3">
        {data.map((item)=>{
                    return (
                        <>
                        
                        
            <div
                class="card text-white bg-dark"
            >
                <img class="card-img-top" src={img} alt="Title" />
                <div class="card-body text-center">
                    <h4 class="card-title">Iphone 16 Plus</h4>
                    <p class="card-text ">512GB ,Blue</p>
                    <p className='btn btn-warning'>Details</p>
                </div>
                
            </div>
            </>
                    )
                })}
        </div>
        <div className="col-lg-2 m-3">
            <div
                class="card text-white bg-dark"
            >
                <img class="card-img-top" src={img} alt="Title" />
                <div class="card-body text-center">
                    <h4 class="card-title">Iphone 16 Plus</h4>
                    <p class="card-text ">512GB ,Blue</p>
                    <p className='btn btn-warning'>Details</p>
                </div>
            </div>
        </div>
        <div className="col-lg-2 m-3">
            <div
                class="card text-white bg-dark"
            >
                <img class="card-img-top" src={img} alt="Title" />
                <div class="card-body text-center">
                    <h4 class="card-title">Iphone 16 Plus</h4>
                    <p class="card-text ">512GB ,Blue</p>
                    <p className='btn btn-warning'>Details</p>
                </div>
            </div>
        </div>
        <div className="col-lg-2 m-3">
            <div
                class="card text-white bg-dark"
            >
                <img class="card-img-top" src={img} alt="Title" />
                <div class="card-body text-center">
                    <h4 class="card-title">Iphone 16 Plus</h4>
                    <p class="card-text ">512GB ,Blue</p>
                    <p className='btn btn-warning'>Details</p>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default ProductsList
