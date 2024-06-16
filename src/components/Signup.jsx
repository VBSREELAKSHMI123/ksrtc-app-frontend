import React from 'react'

const Signup = () => {
  return (
    <div>
        <div className="container">
            <center><h1><b>SIGN UP</b></h1></center><br />
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row g-3">
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-16 col-xxl-6">
                        <label htmlFor="" className="form-label">NAME</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-16 col-xxl-6">
                    <label htmlFor="" className="form-label">EMAIL</label>
                    <textarea name="" id="" className="form-control">...........</textarea>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-16 col-xxl-6">
                    <label htmlFor="" className="form-label">PHONE</label>
                    <input type="text" className="form-control" />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-16 col-xxl-6">
                    <label htmlFor="" className="form-label">PASSWORD</label>
                    <input type="text" className="form-control" />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-16 col-xxl-6">
                    <label htmlFor="" className="form-label">CONFIRM PASSWORD</label>
                    <input type="text" className="form-control" />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-16 col-xxl-6">
                        <center><button className="btn btn-success">REGISTER</button></center>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Signup