import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: null,
}

export const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUserSession: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
        state.user = null;
    },
  },
})

export const { setUserSession, logout } = AuthSlice.actions

export default AuthSlice.reducer