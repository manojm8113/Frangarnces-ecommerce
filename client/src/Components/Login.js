import React, { useState } from 'react';
import { LoginDatas } from './Api';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
} from 'mdb-react-ui-kit';
const Login = () => {
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [ConfirmPassword, setConfirmPassword] = useState('');
  const [showSuccess, setShowSuccess] = useState(false); // State variable for success message
  const dispatch = useDispatch();
  const display = () => {
    // Check if passwords match
    if (Password !== ConfirmPassword) {
      alert('Passwords do not match');
      return;
    }
    // Call login function
    LoginDatas({ Email, Password }, dispatch);
    setShowSuccess(true); // Show success message
  };
  return (
    <div>
      <MDBContainer className='bg-dark'>
        <MDBCard className='text-black m-5' style={{ borderRadius: '25px' }}>
          <MDBCardBody>
           
            <MDBRow>
              <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>
                <p className='text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4'>Sign In</p>
                <div className='d-flex flex-row align-items-center mb-4'>
                  <MDBIcon fas icon='envelope me-3' size='lg' />
                  <MDBInput label='Your Email' id='form2' type='email' onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className='d-flex flex-row align-items-center mb-4'>
                  <MDBIcon fas icon='lock me-3' size='lg' />
                  <MDBInput label='Password' id='form3' type='password' onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className='d-flex flex-row align-items-center mb-4'>
                  <MDBIcon fas icon='key me-3' size='lg' />
                  <MDBInput label='Repeat your password' id='form4' type='password' onChange={(e) => setConfirmPassword(e.target.value)} />
                </div>
                <MDBBtn className='mb-4 ' size='lg' color='dark' onClick={display}>
                  Login
                </MDBBtn>
                <p>
                  You Have Not Signup....?<Link to={'/Signup'}>Signup</Link>
                </p>
                <h5>or</h5>
                <p>You Are <Link to={'/Adminlogin'}><span>Admin</span></Link> or <Link to={'/Companylogin'}><span>Company</span></Link></p>

              </MDBCol>
              <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
                <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid />
              </MDBCol>
            </MDBRow>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    </div>
  );
};
export default Login;
