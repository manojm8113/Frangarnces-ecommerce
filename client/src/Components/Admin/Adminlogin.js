import React, { useState } from 'react'
import loginimg from '../Assets/images/carusel1.png'
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBInput,
    MDBIcon
  } from 'mdb-react-ui-kit';
import { useDispatch } from 'react-redux';
import { AdminLogin,} from '../Api';
const Adminlogin = () => {
    const [Email,setEmail]=useState('')
  const [Password,setPassword]=useState('')
  const dispatch=useDispatch()
  function display(){
    AdminLogin({Email,Password},dispatch)
  }
  return (
    <div>
    <MDBContainer  className='bg-dark'>
    <MDBCard className='text-black m-5' style={{borderRadius: '25px'}}>
      <MDBCardBody>
        <MDBRow>
          <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>
            <p classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">ADMIN</p>
            <div className="d-flex flex-row align-items-center mb-4">
              <MDBIcon fas icon="envelope me-3" size='lg'/>
              <MDBInput label='Your Email' id='form2' type='email' onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div className="d-flex flex-row align-items-center mb-4">
              <MDBIcon fas icon="lock me-3" size='lg'/>
              <MDBInput label='Password' id='form3' type='password' onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <MDBBtn className='mb-4 ' size='lg' color='dark' onClick={display}>Login</MDBBtn>
          </MDBCol>
          <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
            <MDBCardImage src={loginimg} fluid/>
          </MDBCol>
        </MDBRow>
      </MDBCardBody>
    </MDBCard>
  </MDBContainer>
    </div>
  )
}
export default Adminlogin