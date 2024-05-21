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
  MDBListGroup,
  MDBListGroupItem,
  MDBRipple,
  MDBRow,
  MDBAlert,
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
          setCartSize(result.data.length);
          setAllProduct(result.data);
          let total = 0;
          result.data.forEach(item => {
            total += item.offerprice;
          });
          setCount(result.data.length);
          setTotalPrice(total);
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
      // Update the frontend state to reflect the removal
      const updatedProducts = allProduct.filter(product => product.id !== id);
      setAllProduct(updatedProducts);
      setCartSize(updatedProducts.length);
      let total = 0;
      updatedProducts.forEach(item => {
        total += item.offerprice;
      });
      setTotalPrice(total);
      setError('');
    } catch (err) {
      console.log(err);
      setError('Failed to remove the item. Please try again later.');
    }
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
          {allProduct.map((product) => (
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
                          <MDBBtn className="px-3 me-2">
                            <MDBIcon fas icon="minus" />
                          </MDBBtn>
                          <MDBInput defaultValue={1} min={1} type="number" label="Quantity" />
                          <MDBBtn className="px-3 ms-2">
                            <MDBIcon fas icon="plus" />
                          </MDBBtn>
                        </div>
                        <p className="text-start text-md-center">
                          <strong>Total: ${product.offerprice.toFixed(2)}</strong>
                        </p>
                      </MDBCol>
                    </MDBRow>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          ))}
          <MDBRow className="justify-content-center">
            <MDBCol md="8">
              <MDBCard className="mb-4">
                <MDBCardBody>
                  <MDBTypography tag="h5" className="mb-0">
                    Summary
                  </MDBTypography>
                  <MDBListGroup flush>
                    <MDBListGroupItem className="d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                      Products
                      <span>${price.toFixed(2)}</span>
                    </MDBListGroupItem>
                    <MDBListGroupItem className="d-flex justify-content-between align-items-center px-0">
                      Shipping
                      <span>Gratis</span>
                    </MDBListGroupItem>
                    <MDBListGroupItem className="d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                      <div>
                        <strong>Total amount</strong>
                        <strong>
                          <p className="mb-0">(including GST)</p>
                        </strong>
                      </div>
                      <span>
                        <strong>${price.toFixed(2)}</strong>
                      </span>
                    </MDBListGroupItem>
                  </MDBListGroup>
                  <MDBBtn block size="lg" onClick={() => navigate('/checkout')} className='btn btn-dark'>
                    Go to checkout
                  </MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
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
