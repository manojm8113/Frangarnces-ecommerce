import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Contactform from './Components/Contactform';
import Userprofile from './Components/Userprofile';
import Products from './Components/Products';
import Addproduct from './Components/Admin/Addproduct';
import Usersprofile from './Components/Admin/Usersprofile';
import Updateuser from './Components/Updateuser';
import Adminlogin from './Components/Admin/Adminlogin';
import Addcompany from './Components/Admin/Addcompany';
import Companyprofils from './Components/Admin/Companyprofils';
import Dashbord from './Components/Admin/Dashbord';
import Userquerys from './Components/Admin/Userquerys';
import Product from './Components/Product';
import Productdetails from './Components/Productdetails';
import Cart from './Components/Cart';
import Companylogin from './Components/Admin/Companylogin';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [token, setToken] = useState(null);
  const [pass, setPass] = useState(null);
  const [tokens, setTokens] = useState(null);
  const LoginInfo = useSelector((state) => state.login.LoginInformation?.[0]);
  const LoginInfos = useSelector((state) => state.adminlogin.LoginInformations?.[0]);
  const CompanyInfo = useSelector((state) => state.companylogin.LoginInformationss?.[0]);

  useEffect(() => {
    if (LoginInfo) {
      setToken(LoginInfo.token);
      var userids=LoginInfo.id
    }
    console.log("user id from appjs",userids);
    if (LoginInfos) {
      setPass(LoginInfos.pass);
    }
    if (CompanyInfo) {
      setTokens(CompanyInfo.tokens);
    }
    setIsLoading(false);
  }, [LoginInfo, LoginInfos, CompanyInfo]);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  const router = createBrowserRouter([
    {
      path: '/',
      element: token ? <Home /> : <Login />
    },
    {
      path: 'Home',
      element: token ? <Home />:<Login/>
    },
    {
      path: 'user',
      element:token ? <Userprofile />:<Login/>
    },
    {
      path: 'update',
      element:token ? <Updateuser />:<Login/>
    },
    {
      path: 'about',
      element: token ?<About />:<Login/>
    },
    {
      path: 'products',
      element:token ? <Products />:<Login/>
    },
    {
      path: 'contact',
      element:token ? <Contactform />:<Login/>
    },
    {
      path: 'prod',
      element: token ?<Product />:<Login/>
    },
    {
      path: 'details/:id',
      element:token ?<Productdetails />:<Login/>
    },
    {
      path: 'cart',
      element: token ?<Cart />:<Login/>
    },
    {
      path: 'adminlogin',
      element:pass?<Dashbord/>:<Adminlogin /> 
    },
   
    {
      path: 'users',
      element:pass? <Usersprofile />:<Adminlogin/>
    },
    {
      path: 'addcompany',
      element: pass ?<Addcompany /> :<Adminlogin/>
    },
    {
      path: 'Dashbord',
      element: pass ? <Dashbord />:<Adminlogin/>
    },
    {
      path: 'Comment',
      element:pass ? <Userquerys />:<Adminlogin/>
    },
    {
      path: 'Companys',
      element:pass ? <Companyprofils />:<Adminlogin/>
    },
    {
      path: 'signup',
      element: <Signup />
    },
    {
      path: 'companylogin',
      element:tokens ? <Addproduct />:<Companylogin />
    } 
  ]);

  return <RouterProvider router={router} />;
};

export default App;
