import React from 'react'
import Navbar from './Navbar'
import './Home.css'
import Carousel from 'react-bootstrap/Carousel';
import  carose1 from './Assets/images/carusel1.png';
import  carose2 from './Assets/images/carusel2.webp';
import  carose3 from './Assets/images/carusel3.png';
import men from './Assets/images/formen.png'
import women from './Assets/images/forwomen.png'
import falvia from './Assets/images/flavia.png'
import newluanch from './Assets/images/newluanch.png'
import product1 from './Assets/images/product1.jpg'
import product2 from './Assets/images/product2.jpg'
import product3 from './Assets/images/product3.jpg'
import product4 from './Assets/images/product4.png'
import product5 from './Assets/images/product5.jpg'
import product6 from './Assets/images/product6.png'
import product7 from './Assets/images/product7.jpg'
import product8 from './Assets/images/product8.jpg'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from './Footer';
import Testimonial from './Testimonial';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div>
    <Navbar/>
    <div>
    <div className='forres'>
    <Carousel>
      <Carousel.Item>
        <img className='d-block w-100' src={carose1} alt='firstimage'/>
        <Carousel.Caption>
          <h3>Choose Your Right Fragrances</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className='d-block w-100' src={carose2} alt='firstimage'/>
      </Carousel.Item>
      <Carousel.Item>
      <img className='d-block w-100' src={carose3} alt='firstimage'/>
      </Carousel.Item>
    </Carousel>
    </div>
    </div>
    <div className="container">
    <Row>
      <Col><img src={men} alt="formen" className='forgender'/></Col>
      <Col><img src={women} alt="forwomen" className='forgender'/></Col>
    </Row>
    </div>
    <div className="container">
    <Row>
      <Col><img src={falvia} alt="formen" className='forgender'/></Col>
      <Col><img src={newluanch} alt="forwomen" className='forgender'/></Col>
    </Row>
    </div>
<section>
<div className="container overflow-hidden">
    <div className="row gy-4 gy-lg-0 gx-xxl-5">
      <div className="col-12 col-md-6 col-lg-3">
        <div className="card border-0 border-bottom border-primary shadow-sm overflow-hidden">
          <div className="card-body p-0">
            <figure className="m-0 p-0">
              <img className="img-fluid" loading="lazy" src={product1} alt=""/>
              <figcaption className="m-0 p-4">
                <h4 className="mb-1">Club de nuit</h4>
                <Link to={'/Prod'}><button className='btn btn-secondary'>View More</button></Link>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-6 col-lg-3">
        <div className="card border-0 border-bottom border-primary shadow-sm overflow-hidden">
          <div className="card-body p-0">
            <figure className="m-0 p-0">
              <img className="img-fluid" loading="lazy" src={product2} alt=""/>
              <figcaption className="m-0 p-4">
                <h4 className="mb-1">Eau de Lubin</h4>
                <Link to={'/Prod'}><button className='btn btn-secondary'>View More</button></Link>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-6 col-lg-3">
        <div className="card border-0 border-bottom border-primary shadow-sm overflow-hidden">
          <div className="card-body p-0">
            <figure class="m-0 p-0">
              <img className="img-fluid" loading="lazy" src={product6} alt=""/>
              <figcaption class="m-0 p-4">
                <h4 class="mb-1">Eau de Cologne</h4>
                <Link to={'/Prod'}><button className='btn btn-secondary'>View More</button></Link>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-6 col-lg-3">
        <div class="card border-0 border-bottom border-primary shadow-sm overflow-hidden">
          <div class="card-body p-0">
            <figure class="m-0 p-0">
              <img class="img-fluid" loading="lazy" src={product7} alt=""/>
              <figcaption class="m-0 p-4">
                <h4 class="mb-1">Heliotrope Blanc</h4>
                <Link to={'/Prod'}><button className='btn btn-secondary'>View More</button></Link>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container overflow-hidden">
    <div class="row gy-4 gy-lg-0 gx-xxl-5">
      <div class="col-12 col-md-6 col-lg-3">
        <div class="card border-0 border-bottom border-primary shadow-sm overflow-hidden">
          <div class="card-body p-0">
            <figure class="m-0 p-0">
              <img class="img-fluid" loading="lazy" src={product5} alt=""/>
              <figcaption class="m-0 p-4">
                <h4 class="mb-1">Edwardian Bouquet</h4>
                <Link to={'/Prod'}><button className='btn btn-secondary'>View More</button></Link>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-6 col-lg-3">
        <div class="card border-0 border-bottom border-primary shadow-sm overflow-hidden">
          <div class="card-body p-0">
            <figure class="m-0 p-0">
              <img class="img-fluid" loading="lazy" src={product3} alt=""/>
              <figcaption class="m-0 p-4">
                <h4 class="mb-1">Ambre Antique</h4>
                <Link to={'/Prod'}><button className='btn btn-secondary'>View More</button></Link>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-6 col-lg-3">
        <div class="card border-0 border-bottom border-primary shadow-sm overflow-hidden">
          <div class="card-body p-0">
            <figure class="m-0 p-0">
              <img class="img-fluid" loading="lazy" src={product4} alt=""/>
              <figcaption class="m-0 p-4">
                <h4 class="mb-1">Tabac Blond</h4>
                <Link to={'/Prod'}><button className='btn btn-secondary'>View More</button></Link>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-6 col-lg-3">
        <div class="card border-0 border-bottom border-primary shadow-sm overflow-hidden">
          <div class="card-body p-0">
            <figure class="m-0 p-0">
              <img class="img-fluid" loading="lazy" src={product8} alt=""/>
              <figcaption class="m-0 p-4">
                <h4 class="mb-1">Nuit de Noel</h4>
                <Link to={'/Prod'}><button className='btn btn-secondary'>View More</button></Link>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<Testimonial/>
<Footer/>
    </div>
  )
}
export default Home