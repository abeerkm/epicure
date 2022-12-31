import {createSlice } from '@reduxjs/toolkit'

export const restaurantsSlice = createSlice({
  name: 'restaurants',
  initialState: {
    value: []
  },
  reducers: {
    setRestaurants: (state, action) => {
      state.value=action.payload;
    },
    
  },
})

export const { setRestaurants } = restaurantsSlice.actions

export default restaurantsSlice.reducer