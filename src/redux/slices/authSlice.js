import {createSlice} from '@reduxjs/toolkit';

// ACTIONS
import {actions} from '../config';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    phone: '',
    password: '',
    user: null,
    token: null,
    error: false,
    loading: false,
    loginError: false,
  },
  reducers: {
    changePhone: (state, action) => {
      return {...state, loginError: false, phone: action.payload};
    },
    changePass: (state, action) => {
      return {...state, loginError: false, password: action.payload};
    },
  },
});

// Action creators are generated for each case reducer function
export const {changePhone, changePass} = authSlice.actions;

export default authSlice.reducer;
