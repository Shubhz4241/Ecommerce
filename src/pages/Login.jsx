import axios from 'axios'
import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const Login = () => {

    const[formdata, setFormdata] = useState({
        email:"",
        password:""
    })

    const navigate = useNavigate();

    const handleChange = (e) =>{
        const {name, value} = e.target;
        setFormdata({...formdata,[name]:value})
    }

    const handleSubmit= async (e)=>{
        e.preventDefault();

        const res = await axios.post("http://localhost:8087/admin/login",formdata);
        console.log(res.data);
        
        if(res.data!=null){
          alert("Login Success")
          localStorage.setItem("fullname",res.data.fullname);
          navigate("/adminpanel");
        } else{
          alert("Login Failed!!! Try Admin");
        }
        
    }

  return (
    <>
      <div className="p-5" style={{height:"97vh",backgroundColor:"black"}}>
        <div className="row p-5 ">
        <div className="col-lg-4"></div>
        <div className="col-lg-4">
            <div class="card mx-auto">
                <div class=" text-dark fw-bold fs-2 text-center mt-3">Hey! Admin <br />Welcome Back</div>
                <div class="card-body">
                    <h4 class="card-title text-center">Login Here</h4>
                    <form className='p-3' onSubmit={handleSubmit} >
                        <label htmlFor="" className='p-2'>Email</label><br />
                        <input type="text " name='email' onChange={handleChange} className='w-100 border-0 bg-light'  value={formdata.email} /><br />
                        <label htmlFor="" className='p-2'>Password</label><br />
                        <input type="text" name='password' onChange={handleChange} className='w-100 border-0 bg-light' value={formdata.password}  /><br />
                        <div className="row">
                        <button  className='btn btn-primary p-1 mt-3 w-50 mx-auto'>Login Here</button>
                        </div>
                    </form>
                </div>
                <div class="card-footer text-muted text-center ">Not Register? 
                <a href="" className='mx-3'></a>
                <NavLink to="/register">Register here</NavLink>
                </div>
            </div>
            </div>
            <div className="col-lg-4"></div>
            
        </div>
      </div>
    </>
  )
}

export default Login
