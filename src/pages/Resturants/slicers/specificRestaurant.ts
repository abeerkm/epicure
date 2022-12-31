import {createSlice } from '@reduxjs/toolkit'

export const specificRestaurantSlice = createSlice({
  name: 'restaurant',
  initialState: {
    value: []
  },
  reducers: {
    specificRestaurant: (state, action) => {
      state.value = action.payload;

    },
    
  },
  
})

export const { specificRestaurant } = specificRestaurantSlice.actions

export default specificRestaurantSlice.reducer