import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: cart,
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem : (state,action) => {
        state.items.pop();
    },
    removeCart: (state) =>{
        state.item.length = 0;
    }
  },
});

export const {addItem,removeItem,removeCart} = cartSlice.actions;
export default cartSlice.reducer