import React, { useState } from 'react'

const Signup = () => {
    const [data,setData]=useState({
        "name":"",
        "phone":"",
        "email":"",
        "password":"",
        "cpassword":"",
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
            <center><h1><b>SIGN UP</b></h1></center><br />
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row g-3">
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">NAME</label>
                        <input type="text" className="form-control" name='name' value={data.name} onChange={inputHandler}/>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">PHONE</label>
                    <input type="text" className="form-control" name='phone' value={data.phone} onChange={inputHandler}/>
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">EMAIL</label>
                    <textarea id="" className="form-control" name='email' value={data.email} onChange={inputHandler}>...........</textarea>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">PASSWORD</label>
                    <input type="password"  id="123" className="form-control" name='password' value={data.password} onChange={inputHandler}/>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">CONFIRM PASSWORD</label>
                   <input type="password"  id="12" className="form-control" name='cpassword' value={data.cpassword} onChange={inputHandler}/>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <center><button className="btn btn-success" onClick={readValue}>REGISTER</button></center>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Signup