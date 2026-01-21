import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import AdminPanel from './pages/AdminPanel'
import AddProduct from './pages/AddProduct'
import ProductsList from './pages/ProductList'

function App() {
  
  const router =  createBrowserRouter([
    {
      path:"/",
      element:
      <>
        <Login/>
      </>
    },
    {
      path:"/register",
      element:
      <>
        <Register/>
      </>
    },
    {
      path:"/home",
      element:
      <>
        <Home/>
      </>
    },
    {
      path:"/adminpanel",
      element:
      <>
        <AdminPanel/>
      </>
    },
    {
      path:"/addproduct",
      element:
      <>
        <AddProduct/>
      </>
    },
    {
      path:"/productlist",
      element:
      <>
        <ProductsList/>
      </>
    },
  ])

  return (
    
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
