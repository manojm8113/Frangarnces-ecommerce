import React, { useState } from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'
import { FaBars } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { FaShoppingBag } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import {useDispatch,useSelector} from "react-redux"
const Navbar = () => {
  const[Mobile,setMobile]=useState(false)
  const dispatch=useDispatch()
  const cartState=useSelector(state=>state.cartReduser)
  return (
 <div>
 <nav className="navbar" style={{position:'sticky'}}>
 <h3 className='logo'>Fragrances</h3>
 <ul className={Mobile? "nav-links-mobile":"nav-links"}onClick={()=>setMobile(false)}>
 <Link to='/Home' className='linkings'><li>Home</li></Link>
 <Link to={'/about'} className='linkings'><li>About</li></Link>
 <Link to={'/prod'} className='linkings'><li>Products</li></Link>
 <Link to={'/Contact'} className='linkings'><li>Contact Us</li></Link>
 <Link to={'/user'} className='linkings'><li><CgProfile /></li></Link>
 <Link to={'/cart'} className='linkings'><li><FaShoppingBag/></li></Link>
 </ul>
 <button className='mobile-menu-icon' onClick={()=>setMobile(!Mobile)}>{Mobile? <RxCross2 />:<FaBars />}</button>
 </nav>
 </div>
  )
}
export default Navbar