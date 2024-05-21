import React, { useState } from 'react';
import './Sidebarmenu.css'
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
    FaShoppingBag,
    FaThList,
    FaIndustry
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { FaUsersGear } from 'react-icons/fa6';
const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/Dashbord",
            name:"Dashboard",
            icon:<FaTh/>
        },
        {
            path:"/users",
            name:"Users",
            icon:<FaUserAlt/>
        },
        {
            path:"/analytics",
            name:"Analytics",
            icon:<FaRegChartBar/>
        },
        {
            path:"/comment",
            name:"Comment",
            icon:<FaCommentAlt/>
        },
        {
            path:"/productList",
            name:"Product List",
            icon:<FaThList/>
        },
        {
            path:"/addcompany",
            name:"Company",
            icon:<FaIndustry />
        },
        {
            path:"/Companys",
            name:"Companys",
            icon:<FaUsersGear />
        },
    ]
    return (
        <div>
        <div className="head">
<h1>Fragrances</h1>
        </div>
        <div className="containe ">
        <div className="row">
        <div className="col-3">
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
        </div>
        </div>
        </div>
    );
};

export default Sidebar;