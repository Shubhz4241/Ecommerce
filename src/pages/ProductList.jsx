import React from 'react'
import Sidebar from '../components/Sidebar'
import Dashboard from '../components/Dashboard'
import AddProductF from '../components/AddProductF'
import ProductCard from '../components/ProductCard'

const ProductsList = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
            <div className="col-lg-2">
                <Sidebar />
            </div>
            <div className="col-lg-10">
                <div className="fs-2 fw-bold text-center bg-dark text-light">Admin Panel</div>
                <ProductCard/>
            </div>
        </div>
      </div>
    </>
  )
}

export default ProductsList;
