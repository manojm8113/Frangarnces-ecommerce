import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Getmyprofile, deleteMydata } from "./Api";
import Footer from "./Footer";
import "./Userprofile.css";
import { LogoutData } from "../Redux/Loginslic";

const Userprofile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [Profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const Datas = useSelector((state) => state.login.LoginInformation[0]);
  const id = Datas?.id;

  useEffect(() => {
    if (id) {
      async function getdata() {
        setLoading(true);
        try {
          const profilData = await Getmyprofile(id);
          setProfile(profilData);
        } catch (error) {
          console.error("Error fetching profile data:", error);
        } finally {
          setLoading(false);
        }
      }
      getdata();
    }
  }, [id]);

  const deletemy = async () => {
    const confirmDelete = window.confirm("Are you sure you want to delete your data?");
    if (confirmDelete) {
      try {
        await deleteMydata(id, dispatch);
        alert("Your data has been deleted successfully!");
        dispatch(LogoutData());
        navigate("/signup");
      } catch (err) {
        console.log("delete error:", err);
      }
    }
  };

  const logoutpage = () => {
    const confirmLogout = window.confirm("Are you sure you want to logout?");
    if (confirmLogout) {
      try {
        dispatch(LogoutData());
        alert("You are logged out successfully!");
        navigate("/");
      } catch (err) {
        console.log("logout error:", err);
      }
    }
  };

  return (
    <div>
      <Navbar />
      <div className="page-content page-container" id="page-content">
        <div className="padding">
          <div className="row container d-flex justify-content-center">
            <div className="col-xl-6 col-md-12">
              <div className="card user-card-full">
                <div className="row m-l-0 m-r-0">
                  <div className="col-sm-4 bg-c-lite-green user-profile">
                    <div className="card-block text-center text-white">
                      <div className="m-b-25">
                        <img
                          src="https://img.icons8.com/bubbles/100/000000/user.png"
                          className="img-radius"
                          alt="User-Profile-Image"
                        />
                      </div>
                      <h6 className="f-w-600">
                        UserName:- {Profile?.Username}
                      </h6>
                      <i className=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                    </div>
                  </div>
                  <div className="col-sm-8">
                    <div className="card-block">
                      <h6 className="m-b-20 p-b-5 b-b-default f-w-600">
                        Haii...!! {Profile?.Username}
                      </h6>
                      <div className="row">
                        <div className="col-sm-6">
                          <p className="m-b-10 f-w-600">Email</p>
                          <h6 className="text-muted f-w-400">
                            {Profile?.Email}
                          </h6>
                        </div>
                        <div className="col-sm-6">
                          <p className="m-b-10 f-w-600">Phone</p>
                          <h6 className="text-muted f-w-400">
                            {Profile?.Phone}
                          </h6>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-6">
                          <p className="m-b-10 f-w-600">Address</p>
                          <h6 className="text-muted f-w-400">
                            {Profile?.Address}
                          </h6>
                        </div>
                        <div className="col-sm-6">
                          <p className="m-b-10 f-w-600">Pin</p>
                          <h6 className="text-muted f-w-400">
                            {Profile?.Pincode}
                          </h6>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-4">
                          <button
                            onClick={logoutpage}
                            className="btn btn-outline-dark"
                          >
                            Logout
                          </button>
                        </div>
                        <div className="col-sm-4">
                          <button onClick={deletemy} className="btn btn-outline-dark">
                            Delete
                          </button>
                        </div>
                        <div className="col-sm-4">
                          <Link to={'/update'}>
                            <button className="btn btn-outline-dark">Update</button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {loading && <p>Loading...</p>}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Userprofile;
