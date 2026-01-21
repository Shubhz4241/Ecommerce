import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import Dashboard from '../components/Dashboard'

const AdminPanel = () => {

    const[admin,setAdmin] = useState("");

    useEffect(()=>{
        setAdmin(localStorage.getItem("fullname"));
    })
    
  return (
    <>
      <div className="container-fluid">
        <div className="row">
            <div className="col-lg-2">
                <Sidebar />
            </div>
            <div className="col-lg-10">
                <div className="fs-2 fw-bold text-center bg-dark text-light">Admin {admin}</div>
                <Dashboard/>
            </div>
        </div>
      </div>
    </>
  )
}

export default AdminPanel
