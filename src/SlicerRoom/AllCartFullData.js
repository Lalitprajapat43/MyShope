import { createSlice } from "@reduxjs/toolkit";

const initialState ={
  FullCard:[
    
  ]

}

const FullCartData = createSlice({
    name:'FullData',
    initialState,
    reducers: {
    addToCart: (state, action) => {
      state.FullCard.push(action.payload);
    },
    deleteCart: (state, action) => {
      state.FullCard.splice(action.payload, 1);
    },
  },
})
export default FullCartData.reducer;
export const { addToCart, deleteCart } = FullCartData.actions;
