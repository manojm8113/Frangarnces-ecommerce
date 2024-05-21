import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Addproduct.css';
import Companynav from './Companynav';
import { ToastContainer, toast } from 'react-toastify';
const Addproduct = () => {
    const [image, setImage] = useState(null);
    const [productname, setProductname] = useState('');
    const [price, setPrice] = useState('');
    const [offerprice, setOfferprice] = useState('');
    const [description, setDescription] = useState('');
    const submitImage = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("image", image);
        formData.append("productname", productname);
        formData.append("price", price);
        formData.append("offerprice", offerprice);
        formData.append("description", description);
        try {
          await axios.post("http://localhost:5000/adminapis/uploadimage", formData, {
            headers: { "Content-Type": "multipart/form-data" },
          });
          toast.success('Product added successfully!');
        } catch (error) {
          console.error('Error submitting data:', error);
          toast.error('Failed to add product.');
        }
      };
    return (
        <div>
            <Companynav />
            <section className='addproduct'>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4">
                            <div className="card border border-dark-subtle rounded-4">
                                <div className="card-body p-3 p-md-4 p-xl-5">
                                    <div className="row gy-3 overflow-hidden">
                                        <div className="col-12">
                                            <div className="form-floating mb-3">
                                                <form onSubmit={submitImage} encType='multipart/form-data'>
                                                    <h3>Add Products</h3>
                                                    <label htmlFor="productname" className="form-label">Product Name</label>
                                                    <input type="text" className="form-control" name="text" id="productname" placeholder="Product Name" onChange={(e) => setProductname(e.target.value)} required />
                                                    <label htmlFor="price" className="form-label">PRICE</label>
                                                    <input type="text" className="form-control" name="price" id="price" placeholder="Price" onChange={(e) => setPrice(e.target.value)} required />
                                                    <label htmlFor="offerprice" className="form-label">OFFER PRICE</label>
                                                    <input type="text" className="form-control" name="offerprice" id="offerprice" placeholder="offerPrice" onChange={(e) => setOfferprice(e.target.value)} required />
                                                    <label htmlFor="description" className="form-label">DESCRIPTION</label>
                                                    <input type="text" className="form-control" name="description" id="description" placeholder="description" onChange={(e) => setDescription(e.target.value)} required />
                                                    <input type="file" accept='image/*' onChange={(e) => setImage(e.target.files[0])} />
                                                </form>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="d-grid">
                                                <button type='submit' className='btn btn-dark btn-lg' onClick={submitImage}>Add</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
export default Addproduct;
