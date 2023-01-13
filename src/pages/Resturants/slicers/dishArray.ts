import {createSlice } from '@reduxjs/toolkit'

export const dishArraySlice = createSlice({
  name: 'dishArray',
  initialState: {
    value: []
  },
  reducers: {
    setDishArray: (state, action) => {
      state.value=action.payload;
    },
    
  },
})

export const { setDishArray } = dishArraySlice.actions

export default dishArraySlice.reducer