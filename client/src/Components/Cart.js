import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRipple,
  MDBRow,
  MDBTypography,
} from 'mdb-react-ui-kit';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Cart = () => {
  const [count, setCount] = useState(0);
  const [cartSize, setCartSize] = useState(0);
  const [price, setTotalPrice] = useState(0);
  const [allProduct, setAllProduct] = useState([]);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const MyData = useSelector((state) => state.login.LoginInformation[0]);

  useEffect(() => {
    if (MyData) {
      const fetchCart = async () => {
        const Userid = MyData.id;
        try {
          const result = await axios.get('http://localhost:5000/usercart/getproduct', { params: { Userid } });
          const productsWithQuantity = result.data.map(product => ({ ...product, quantity: 1 }));
          setCartSize(productsWithQuantity.length);
          setAllProduct(productsWithQuantity);
          calculateTotalPrice(productsWithQuantity);
          setCount(productsWithQuantity.length);
        } catch (err) {
          console.log(err);
          setError('Failed to fetch cart items. Please try again later.');
        }
      };
      fetchCart();
    }
  }, [MyData]);

  const handleRemove = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:5000/usercart/removecart/${id}`);
      console.log(response.data);
      const updatedProducts = allProduct.filter(product => product.id !== id);
      setAllProduct(updatedProducts);
      setCartSize(updatedProducts.length);
      calculateTotalPrice(updatedProducts);
      setError('');
    } catch (err) {
      console.log(err);
      setError('Failed to remove the item. Please try again later.');
    }
  };

  const handleQuantityChange = (id, quantity) => {
    const updatedProducts = allProduct.map(product => {
      if (product.id === id) {
        return { ...product, quantity: quantity };
      }
      return product;
    });
    setAllProduct(updatedProducts);
    calculateTotalPrice(updatedProducts);
  };
  
  const handleIncrement = (id) => {
    const updatedProducts = allProduct.map(product => {
      if (product.id === id) {
        return { ...product, quantity: product.quantity + 1 };
      }
      return product;
    });
    setAllProduct(updatedProducts);
    calculateTotalPrice(updatedProducts);
  };
  
  const handleDecrement = (id) => {
    const updatedProducts = allProduct.map(product => {
      if (product.id === id && product.quantity > 1) {
        return { ...product, quantity: product.quantity - 1 };
      }
      return product;
    });
    setAllProduct(updatedProducts);
    calculateTotalPrice(updatedProducts);
  };

  const calculateTotalPrice = (products) => {
    let total = 0;
    products.forEach(item => {
      total += item.offerprice * item.quantity;
    });
    setTotalPrice(total);
  };

  return (
    <div>
      <Navbar />
      <section className="h-100 gradient-custom">
        <MDBContainer className="py-5 h-100">
          <MDBRow className="justify-content-center mb-4">
            <MDBCol md="8">
              <MDBTypography tag="h3" className="mb-4 text-center">
                Shopping Cart
              </MDBTypography>
            </MDBCol>
          </MDBRow>
          {allProduct.length > 0 ? (
            allProduct.map((product) => (
              <MDBRow className="justify-content-center mb-4" key={product.id}>
                <MDBCol md="8">
                  <MDBCard className="mb-4">
                    <MDBCardHeader className="py-3 d-flex justify-content-between">
                      <MDBTypography tag="h5" className="mb-0">
                        {product.productname}
                      </MDBTypography>
                      <MDBBtn color="danger" size="sm" onClick={() => handleRemove(product._id)}>
                        Remove
                      </MDBBtn>
                    </MDBCardHeader>
                    <MDBCardBody>
                      <MDBRow>
                        <MDBCol lg="3" md="12" className="mb-4 mb-lg-0">
                          <MDBRipple rippleTag="div" rippleColor="light" className="bg-image rounded hover-zoom hover-overlay">
                            <img
                              src={require(`../Images/${product.image}`)}
                              className="card-img-top"
                              alt={product.productname}
                            />
                            <a href="#!">
                              <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}></div>
                            </a>
                          </MDBRipple>
                        </MDBCol>
                        <MDBCol lg="5" md="6" className="mb-4 mb-lg-0">
                          <p>
                            <strong>{product.productname}</strong>
                          </p>
                          <p className="text-muted">Price: ${product.offerprice.toFixed(2)}</p>
                        </MDBCol>
                        <MDBCol lg="4" md="6" className="mb-4 mb-lg-0">
                          <div className="d-flex mb-4" style={{ maxWidth: '300px' }}>
                            <MDBBtn className="px-3 me-2" onClick={() => handleDecrement(product.id)}>
                              <MDBIcon fas icon="minus" />
                            </MDBBtn>
                            <MDBInput 
                              value={product.quantity} 
                              min={1} 
                              type="number" 
                              label="Quantity" 
                              onChange={(e) => handleQuantityChange(product.id, parseInt(e.target.value))} 
                            />
                            <MDBBtn className="px-3 ms-2" onClick={() => handleIncrement(product.id)}>
                              <MDBIcon fas icon="plus" />
                            </MDBBtn>
                          </div>
                          <p className="text-start text-md-center">
                            <strong>Total: ${(product.offerprice * product.quantity).toFixed(2)}</strong>
                          </p>
                        </MDBCol>
                      </MDBRow>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              </MDBRow>
            ))
          ) : (
            <MDBTypography tag="h5" className="text-center">
              Your cart is empty.
            </MDBTypography>
          )}
          {allProduct.length > 0 && (
            <MDBRow className="justify-content-center">
              <MDBCol md="8">
                <MDBCard className="mb-4">
                  <MDBCardBody>
                    <MDBTypography tag="h5" className="text-center mb-4">
                      Total Price: ${price.toFixed(2)}
                    </MDBTypography>
                    <MDBBtn block size="lg" onClick={() => navigate('/checkout')} className='btn btn-dark'>
                      Go to checkout
                    </MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          )}
          <MDBRow className="justify-content-center">
            <MDBCol md="8">
              <MDBCard className="mb-4 mb-lg-0">
                <MDBCardBody className="text-center">
                  <p>
                    <strong>We accept</strong>
                  </p>
                  <MDBCardImage className="me-2" width="45px"
                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
                    alt="Visa" />
                  <MDBCardImage className="me-2" width="45px"
                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
                    alt="American Express" />
                  <MDBCardImage className="me-2" width="45px"
                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
                    alt="Mastercard" />
                  <MDBCardImage className="me-2" width="45px"
                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce/includes/gateways/paypal/assets/images/paypal.png"
                    alt="PayPal acceptance mark" />
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
      <Footer />
    </div>
  );
};
export default Cart;
