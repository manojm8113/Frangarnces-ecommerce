import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from './Navbar';
import Footer from './Footer';
import './Product.css'
const Product = () => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        fetchData();
    }, []); 
    const fetchData = async () => {
        try {
            const response = await axios.get("http://localhost:5000/adminapis/getimage");
            setProducts(response.data); // Update state with fetched data
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
    const handleNavigate = (id) => {
        navigate(`/details/${id}`);
    };
    return (
            <div>
            <Navbar/>
            <div className='container overflow-hidden'>
            <div className="row gy-4 gy-lg-0 gx-xxl-5">
            {products.map(product => (
                <div className="col-12 col-md-6 col-lg-3" key={product._id}>
                <div class="card border-0 border-bottom border-primary shadow-sm overflow-hidden">
                    <div className="card p-0">
                    <figure className='m-0 p-0'>
                    <img src={require(`../Images/${product.image}`)} className="card-img-top" alt={product.productname} onClick={() => handleNavigate(product._id)}
                    style={{ cursor: 'pointer' }} 
                />
                        <div className="card-body">
                        <figcaption className="m-0 p-4">
                            <h5 className="card-title" id='card-titles'>{product.productname}</h5>
                            <button className="btn btn-black" id='pricebtn'><span id='prices'>${product.price}</span> <span id='offers'>Offer Price: </span><span id='offerprices'>${product.offerprice}</span></button> 
                         </figcaption>
                         </div>
                        </figure>
                        <button className='cartbutton' onClick={() => handleNavigate(product._id)}>Know More</button>
                    </div>
                </div>
                </div>
            ))}
            </div>
        </div>
        <Footer/>
    </div>
     )}
export default Product
