import { TUser } from '@/models/user.model';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { deleteCookie } from 'cookies-next';

const initialUser = {
  id: '',
  username: '',
  email: '',
  fullName: '',
  password: '',
};

export const userSlice = createSlice({
  name: 'auth',
  initialState: initialUser as TUser,
  reducers: {
    login: (state, action: PayloadAction<TUser>) => {
      state = { ...state, ...action.payload };
      return state;
    },
    logout: (state) => {
      deleteCookie('access_token'), deleteCookie('refresh_token');
      state = initialUser;
      return state;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
