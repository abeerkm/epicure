import {createSlice } from '@reduxjs/toolkit'

export const UserSlice = createSlice({
  name: 'user',
  initialState: {
    value: []
  },
  reducers: {
    setUser: (state, action) => {
      state.value=action.payload;
    },
    
  },
})

export const { setUser } = UserSlice.actions

export default UserSlice.reducer