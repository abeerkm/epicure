import {createSlice } from '@reduxjs/toolkit'

export const dishOnClick = createSlice({
  name: 'dishOnClick',
  initialState: {
    value: []
  },
  reducers: {
    setDishOnClick: (state, action) => {
      state.value=action.payload;
    },
    
    
  },
})

export const { setDishOnClick } = dishOnClick.actions

export default dishOnClick.reducer