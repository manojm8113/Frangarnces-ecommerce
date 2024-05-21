import React from 'react'
import { Link } from 'react-router-dom'
import Add from './Addproduct'
import { LogoutDatass } from '../../Redux/Companyslice';
import { useDispatch } from 'react-redux';
const Companynav = () => {
  const dispatch = useDispatch();
  function logout() {
    const confirmLogout = window.confirm("Are you sure you want to logout?");
    if (confirmLogout) {
      try {
        dispatch(LogoutDatass());
        alert("You are logged out successfully!");
      } catch (err) {
        console.log("logout error:", err);
      }
    }
  }
  return (
    <div>
    <div className="container-fluid mx-2">
    <div className="row mt-5 mx-2">
    <div className="col-md-3">
    <Link to={'/Add'}><button className='btn btn-dark w-100 mb-4'>Add Products</button></Link>
    <button className='btn btn-dark w-100 mb-4'>All Product</button>
    <button className='btn btn-dark w-100 mb-4' onClick={logout}>Log out</button>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Companynav