import {createSlice } from '@reduxjs/toolkit'

export const orderSlice = createSlice({
  name: 'orderDetails',
  initialState:{
    value: [{}],
  },
  reducers: {
    setOrder:(state, action)=> {
      state.value=state.value.concat(action.payload);
    },
  },
})

export const { setOrder } = orderSlice.actions

export default orderSlice.reducer