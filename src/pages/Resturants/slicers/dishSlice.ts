import {createSlice } from '@reduxjs/toolkit'

export const dishSlice = createSlice({
  name: 'dishes',
  initialState: {
    value: []
  },
  reducers: {
    setDishes: (state, action) => {
      state.value=action.payload;
    },
    
  },
})

export const { setDishes } = dishSlice.actions

export default dishSlice.reducer