import { createSlice } from '@reduxjs/toolkit';

const LoginInfoss = createSlice({
  name: 'companylogin',
  initialState: {
    LoginInformationss: []
  },
  reducers: {
    takeLogindatass: (state, action) => {
      if (!Array.isArray(state.LoginInformationss)) {
        state.LoginInformationss = [];
      }
      state.LoginInformationss.push(action.payload);
      console.log('actions value', action);
    },
    LogoutDatass: (state) => {
      state.LoginInformationss = [];
    }
  }
});
export const { takeLogindatass, LogoutDatass } = LoginInfoss.actions;
export default LoginInfoss.reducer;
