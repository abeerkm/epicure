import {createSlice } from '@reduxjs/toolkit'

export const checkoutSlice = createSlice({
  name: 'checkout',
  initialState: {
    value: false
  },
  reducers: {
    setCheckout: (state, action) => {
      state.value=action.payload;
    },
    
  },
})

export const { setCheckout } = checkoutSlice.actions

export default checkoutSlice.reducer