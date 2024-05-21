import React, { useState } from 'react';
import './Companylogin.css'
import loginimage from '../Assets/images/companylogin.avif'
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
import { CompanyLogin } from '../Api';
const Companylogin = () => {
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const dispatch = useDispatch();
  function display(){
    CompanyLogin({Email,Password},dispatch)
  }
  return (
    <div>
      <MDBContainer className='bg-dark'>
        <MDBCard className='text-black m-5' style={{ borderRadius: '25px' }}>
          <MDBCardBody>
            <MDBRow>
              <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>
                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Company</p>
                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="envelope me-3" size='lg' />
                  <MDBInput label='Email' id='form2' type='email' onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="lock me-3" size='lg' />
                  <MDBInput label='Password' id='form3' type='password' onChange={(e) => setPassword(e.target.value)} />
                </div>
                <MDBBtn className='mb-4' size='lg' color='dark' onClick={display}>Login</MDBBtn>
              </MDBCol>
              <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
                <MDBCardImage className='companyloginimg' src={loginimage}  />
              </MDBCol>
            </MDBRow>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    </div>
  );
};
export default Companylogin;
