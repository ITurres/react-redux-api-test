import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/users/usersSlice';

const usersStore = configureStore({
  reducer: {
    users: userReducer,
  },
});

export default usersStore;
