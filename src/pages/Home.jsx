import React from 'react'
import Herosection from '../components/Herosection'
import Navbar from '../components/Navbar'
import ProductsList from '../components/ProductsList'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
      
      <div className="container-fluid">
        <Navbar/>
        <Herosection/>
        <ProductsList/>
        <Footer />
      </div>
    </>
  )
}

export default Home
