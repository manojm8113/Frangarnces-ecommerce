import {createSlice}from '@reduxjs/toolkit'
const LoginInfos=createSlice({
    name:"adminlogin",
    initialState:{
        LoginInformations:[]
    },
    reducers:{
        takeLogindatas:(state,action)=>{
            if(!Array.isArray(state.LoginInformations)){
state.LoginInformations=[];
            }       
            state.LoginInformations.push(action.payload)
            console.log("action values are",action);
        },
         LogoutDatas:(state,action)=>{
            state.LoginInformations=[];
         }
    }
})
export const {takeLogindatas,LogoutDatas}=LoginInfos.actions
export default LoginInfos.reducer