import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Getmyprofile, UpdateMydata } from './Api';
import './Updateuser.css';
import Footer from './Footer';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const Updateuser = () => {
  const [info, setInfo] = useState(null);
  const Data = useSelector((state) => state.login.LoginInformation[0]);
  const id = Data?.id;

  const [Username, setUsername] = useState('');
  const [Email, setEmail] = useState('');
  const [Phone, setPhone] = useState('');
  const [Address, setAddress] = useState('');
  const [Pincode, setPincode] = useState('');

  useEffect(() => {
    async function display() {
      if (id) {
        const myData = await Getmyprofile(id);
        setInfo(myData);
        setUsername(myData.Username);
        setEmail(myData.Email);
        setPhone(myData.Phone);
        setAddress(myData.Address);
        setPincode(myData.Pincode);
      }
    }
    display();
  }, [id]);

  const update = async () => {
    console.log("Updating with", { Username, Email, Phone, Address, Pincode }, id);
    try {
      await UpdateMydata({ Username, Email, Phone, Address, Pincode }, id);
      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Update error:", error);
      alert("Failed to update profile.");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container rounded bg-white mt-5">
        <div className="row">
          <div className="col-md-4 border-right">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5">
              <span className="text-black-50 font-weight-bold">Update Your Profile <i className="fa fa-long-arrow-right mr-1 mb-1"></i></span>
            </div>
          </div>
          <div className="col-md-8">
            <div className="p-3 py-5">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <div className="d-flex flex-row align-items-center back">
                  <i className="fa fa-long-arrow-left mr-1 mb-1"></i>
                  <Link to={'/Home'}><h6>Back to home</h6></Link>
                </div>
              </div>
              <div className="row mt-2">
                <div className="col-md-12">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="User name"
                    value={Username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Email"
                    value={Email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Phone number"
                    value={Phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Address"
                    value={Address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Pincode"
                    value={Pincode}
                    onChange={(e) => setPincode(e.target.value)}
                  />
                </div>
              </div>
              <div className="mt-5 text-right">
                <button className="btn btn-dark profile-button" type="button" onClick={update}>
                  Save Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Updateuser;
