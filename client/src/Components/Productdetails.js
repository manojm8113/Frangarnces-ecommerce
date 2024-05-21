import React, { useEffect, useState } from 'react'
import './Productdetails.css'
import { Link, useParams } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import axios from 'axios'
import { useDispatch,useSelector } from 'react-redux'
const Productdetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [cartSize, setCartSize] = useState([]);
    const [selectedFile, setSelectedFile] = useState(null); // State to store selected file
    useEffect(() => {
      const fetchProduct = async () => {
        try {
          const response = await axios.get(`http://localhost:5000/adminapis/getproduct/${id}`);
          setProduct(response.data);
        } catch (error) {
          console.error('Error fetching product:', error);
          setError('Error fetching product.');
        } finally {
          setLoading(false);
        }
      };
      fetchProduct();
    }, [id]);
    const Cartids = useSelector((state) => state.login.LoginInformation?.[0]);
      if (Cartids) {
        var Userid=Cartids.id

      }
      console.log(Userid);
    const handleFileChange = (event) => {
      setSelectedFile(event.target.files[0]);
    };
    const addtocart = async () => {
      try {
        setCartSize(cartSize + 1);
        const formData = new FormData();
        formData.append('image', product.image);
        formData.append('productname', product.productname);
        formData.append('offerprice', product.offerprice);
        formData.append('userid',Userid);
        const response = await axios.post('http://localhost:5000/usercart/uploadcart', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        if (response.data.status === 'ok') {
          alert('Product added to cart');
        } else {
          alert('Failed to add product to cart');
        }
      } catch (error) {
        console.error('Error adding to cart:', error);
        alert('Error adding to cart');
      }
    };
    if (loading) {
      return <div>Loading...</div>;
    }
    if (error) {
      return <div>{error}</div>;
    }
    if (!product) {
      return <div>Product not found.</div>;
    }
  return (
    <div>
    <Navbar/>
    <div className="container mt-5 mb-5">
    <div className="row d-flex justify-content-center">
        <div className="col-md-10">
            <div class="card">
                <div class="row">
                    <div class="col-md-6">
                        <div class="images p-3">
                            <div class="text-center p-4" id='singleproduct'><img src={require(`../Images/${product.image}`)} alt={product.productname} width="250"/></div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="product p-4">
                            <div class="d-flex justify-content-between align-items-center">
                                <Link to={'/prod'}><div class="d-flex align-items-center" id='backto'> <i class="fa fa-long-arrow-left"></i> <span class="ml-1">Back</span></div></Link>
                            </div>
                            <div class="mt-4 mb-3"> <span class="text-uppercase text-muted brand">Fragrances</span>
                                <h5 class="text-uppercase">{product.productname}</h5>
                                <div class="price d-flex flex-row align-items-center"> <span class="act-price">${product.offerprice}</span>
                                    <div class="ml-2"> <small class="dis-price">${product.price}</small> <span>40% OFF</span> </div>
                                </div>
                            </div>
                            <p class="about">{product.description}</p>
                            <div class="sizes mt-5">
                                <h6 class="text-uppercase">Size</h6> <label class="radio"> <input type="radio" name="size" value="100" checked/> <span>100</span> </label> <label class="radio"> <input type="radio" name="size" value="200"/> <span>200</span> </label> <label class="radio"> <input type="radio" name="size" value="300"/> <span>300</span> </label> <label class="radio"> <input type="radio" name="size" value="350"/> <span>350</span> </label>
                            </div>
                            <div class="cart mt-4 align-items-center"><button class="btn btn-danger text-uppercase mr-2 px-4">ChekOut</button>  <button class="btn btn-danger text-uppercase mr-2 px-4" onClick={addtocart}>Add to cart</button></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<Footer/>
    </div>
  )
}
export default Productdetails