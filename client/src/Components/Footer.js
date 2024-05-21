import React from 'react'
import './Footer.css'
import { FaFacebook } from "react-icons/fa";
import { TiSocialTwitter } from "react-icons/ti";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div>
    <section className="footer">
      <div className="footer-row">
        <div className="footer-col">
          <h4>Fragrances</h4>
          <ul className="links">
            <Link to={'/home'} className='linking'><li>Home</li></Link>
            <Link to={'/about'} className='linking'><li>About us</li></Link>
            <Link to={'/prod'} className='linking'><li>Product</li></Link>
            <Link to={'/cart'} className='linking'><li>Cart</li></Link>
            <Link to={'/contact'} className='linking'><li>Contact Us</li></Link>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Newsletter</h4>
          <p>
            Subscribe to our newsletter for a weekly dose
            of news, updates, helpful tips, and
            exclusive offers.
          </p>
          <form action="#">
            <input type="text" placeholder="Your email" required/>
            <button type="submit">SUBSCRIBE</button>
          </form>
          <div className="icons">
          <FaFacebook />
          <a href='https://x.com/Manojm2507' className='footicons'><TiSocialTwitter /></a>
          <a href="https://www.linkedin.com/in/manoj811/" className='footicons'><FaLinkedinIn /></a>
          <a href="https://www.instagram.com/manojm.257/" className='footicons'><FaInstagram /></a>
          </div>
        </div>
        <div className="footer-col">
          <h4>Info</h4>
          <ul className="links">
            <li><a href="#" ><FaPhoneAlt /> +91-9876543652</a></li>
            <li><a href="#"><MdEmail />fragrances@gmail.com</a></li>
            <li><a href="#"><FaMapMarkerAlt />Fragrances shop No-31,NewDelhi,<br/>&nbsp;&nbsp;&nbsp;&nbsp;Kazaar Street Road,<br/>&nbsp;&nbsp;&nbsp;&nbsp;NewDelhi India pin:978654 </a></li>
          </ul>
        </div>
        <div className="footer-col">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d89703.09762667723!2d76.21928753247239!3d9.94946669899851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d514abec6bf%3A0xbd582caa5844192!2sKochi%2C%20Kerala!5e0!3m2!1sen!2sin!4v1712332605551!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </section>
    </div>
  )
}
export default Footer