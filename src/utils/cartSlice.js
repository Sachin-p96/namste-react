import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    pageName:''
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem : (state,action) => {
        state.items.pop();
    },
    removeCart: (state) =>{
        state.items.length = 0;
    },
    setPageName: (state,action) => {
       state.pageName = action.payload
    }
  },
});

export const {addItem,removeItem,removeCart,setPageName} = cartSlice.actions;
export default cartSlice.reducer