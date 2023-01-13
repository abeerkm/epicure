import {createSlice } from '@reduxjs/toolkit'

export const chefSlice = createSlice({
  name: 'chefs',
  initialState: {
    value: []
  },
  reducers: {
    setChefs: (state, action) => {
      state.value=action.payload;
    },
    
  },
})

export const { setChefs } = chefSlice.actions

export default chefSlice.reducer