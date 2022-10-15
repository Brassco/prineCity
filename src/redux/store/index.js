import {configureStore} from '@reduxjs/toolkit';
import reducers from '../reducers';

// Reducer slice
import authReducer from '../slices/authSlice';

export default configureStore({
  reducer: {
    auth: authReducer,
  },
});
