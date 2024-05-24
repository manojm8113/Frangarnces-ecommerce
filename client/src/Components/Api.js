import { PassRequest, TokenRequest, basicRequest } from "./Axioscreate";
import {LogoutData, takeLogindata} from "../Redux/Loginslic"
import { takeLogindatas } from "../Redux/Adminslice";
import { takeLogindatass } from "../Redux/Companyslice";
import axios from "axios";
export const signData=async (data)=>{
    console.log(">>>>>>>>>>>>>>",data);
    try{
        const userData=await basicRequest.post('/userapis/signin',data)
        console.log("final datas",userData.data);
    }catch(err){
        console.log(err.message);
    }
}
//  ***********add company ***********
export const companyregister=async (data)=>{
    console.log(">>>>>>>>>>>>>>",data);
    try{
        const companyData=await basicRequest.post('/addcompany/signin',data)
        console.log("final datas",companyData.data);
    }catch(err){
        console.log(err.message);
    }
}
// **********users Querys*********
export const queryDatas=async (data)=>{
    console.log(">>>>>>>>>>>>>>",data);
    try{
        const userData=await basicRequest.post('/userquerys/send',data)
        console.log("final datas",userData.data);
    }catch(err){
        console.log(err.message);
    }
}
export const LoginDatas=async(data,dispatch)=>{
    console.log("datas",data);
    try{
        const LoginInfo=await basicRequest.post('/logindatas/Login',data)
        console.log("Login user datas",LoginInfo.data);
        dispatch(takeLogindata(LoginInfo.data))
    }catch(err){
        console.log(err.message);
    }
}
// ************ admin login ****************
export const AdminLogin=async(data,dispatch)=>{
    console.log("datas",data);
    try{
        const LoginInfos=await basicRequest.post('/adminlogins/login',data)
        console.log("Login admin datas",LoginInfos.data);
        dispatch(takeLogindatas(LoginInfos.data))
    }catch(err){
        console.log(err.message);
    }
}
// *************company login ******************
export const CompanyLogin = async (data, dispatch) => {
    console.log('datas', data);
    try {
      const LoginInfos = await basicRequest.post('/companylogin/login', data); // Ensure axios or basicRequest is correctly imported
      console.log('Login company datas', LoginInfos.data);
      dispatch(takeLogindatass(LoginInfos.data));
    } catch (err) {
      console.log(err.message);
    }
  };

export const Getmyprofile=async(id)=>{
    try{
        const Getprofile=await TokenRequest.get(`/userapis/Getdatas/${id}`)
        console.log("user profile information",Getprofile);
        return Getprofile.data
    }catch(err){
        console.log(err.message);
    }
}
// ****** user details **********
export const Getuserdetails=async(id)=>{
    try{
        const Getprofile=await TokenRequest.get('/userapis/userdata')
        console.log("user profile information",Getprofile);
        return Getprofile.data
    }catch(err){
        console.log(err.message);
    }
}
// ****** End *******

// company details ********
export const Getcompanydetails=async()=>{
    try{
        const Getprofile=await PassRequest.get('/addcompany/companydata')
        console.log("company profile information",Getprofile);
        return Getprofile.data
    }catch(err){
        console.log(err.message);
    }
}
export const UpdateMydata=async(data,id)=>{
    console.log("second check",data,id);
    try{
        const UpdateData=await basicRequest.put(`/userapis/updateData/${id}`,data)
        console.log("updated datas",UpdateData);
    }catch(err){
        console.log(err.message);
    }
}
export const deleteMydata=async(id,dispatch)=>{
    try{
        await basicRequest.delete(`/userapis/deletedata/${id}`)
        alert("are you sure to delete...!",dispatch(LogoutData()))
    }catch(err){
        console.log(err.message);
    }
}
 export const DeleteUser=async(id)=>{
try{
    await basicRequest.delete(`/userapis/deletedata/${id}`)
    console.log("deleted");
}
catch(err){
    console.log(err);
}
 }