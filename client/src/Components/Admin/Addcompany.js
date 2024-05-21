import React, { useState } from 'react'
import Sidebar from './Sidebar'
import { useDispatch } from 'react-redux'
import { CompanyLogin, companyregister } from '../Api'
import './Addcompany.css'
const Addcompany = () => {
  const [Companyname,setCompanyname]=useState('')
  const [Email,setEmail]=useState('')
  const [Password,setPassword]=useState('')
  async function submit(){
    companyregister({Companyname,Email,Password})
}
  return (
    <div>
    <Sidebar/>
    <div className='margin'>
<div className="py-3 py-md-5">
  <div className="container">
    <div class="row justify-content-md-center">
      <div className="col-12 col-md-11 col-lg-8 col-xl-7 col-xxl-6">
        <div className="bg-white p-4 p-md-5 rounded shadow-sm">
          <div className="row">
            <div className="col-12">
              <div className="mb-5">
                <h2 className="h3">Company Registration</h2>
                <h3 className="fs-6 fw-normal text-secondary m-0">Enter Company details to register</h3>
              </div>
            </div>
          </div>
            <div className="row gy-3 gy-md-4 overflow-hidden">
              <div className="col-12">
                <label for="firstName" className="form-label">Company Name<span className="text-danger">*</span></label>
                <input type="text" className="form-control" name="companyname" id="companyname" placeholder="Company Name" onChange={(e)=>setCompanyname(e.target.value)} required/>
              </div>
              <div className="col-12">
                <label for="email" className="form-label">Email <span className="text-danger">*</span></label>
                <input type="email" className="form-control" name="email" id="email" placeholder="name@example.com" onChange={(e)=>setEmail(e.target.value)} required/>
              </div>
              <div className="col-12">
                <label for="password" className="form-label">Password <span className="text-danger">*</span></label>
                <input type="password" className="form-control" name="password" id="password" placeholder="*********" onChange={(e)=>setPassword(e.target.value)} required/>
              </div>
              <div className="col-12">
                <div className="d-grid">
                  <button className="btn btn-lg btn-dark" type="submit" onClick={submit}>Add Company</button>
                </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</div>
 </div>
  )
}

export default Addcompany