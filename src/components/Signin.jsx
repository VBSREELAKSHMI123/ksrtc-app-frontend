import React, { useState } from 'react'

const Signin = () => {
    const [data,setData]=useState({
        "email":"",
        "password":""
    })
    const inputHandler=(event)=>{
        setData({...data,[event.target.name]:event.target.value})
    }
    const readValue=()=>{
        console.log(data)
    }
  return (
    <div>
        <div className="container">
            <center><h1><b>SIGN IN</b></h1></center><br />
            <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">EMAIL</label>
                    <input type="text" className="form-control" name='email' value={data.email} onChange={inputHandler}/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">PASSWORD</label>
                    <input type="password" id="123" className="form-control" name='password' value={data.password} onChange={inputHandler}/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <center><button className="btn btn-secondary" onClick={readValue}>Login</button></center>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Signin