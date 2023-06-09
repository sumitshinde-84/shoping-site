import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: localStorage.getItem('cart')!==null?JSON.parse(localStorage.getItem('cart')):[],

  reducers: {
    add(state, action) {
      const newItem = action.payload;
      const existingItem = state.find(
        (item) => item.id === newItem.id && item.size === newItem.size
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.push(newItem);
      }
      localStorage.setItem('cart',JSON.stringify(state))
    },
    increaseQuantity(state, action) {
      const { id, size } = action.payload;
      const item = state.find((item) => item.id === id && item.size === size);
      if (item) {
        item.quantity += 1;
      }
      localStorage.setItem('cart',JSON.stringify(state))
    },
    decreaseQuantity(state, action) {
      const { id, size } = action.payload;
      const item = state.find((item) => item.id === id && item.size === size);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
      localStorage.setItem('cart',JSON.stringify(state))
    },
    remove(state, action) {
      const itemToRemove = action.payload;
      state = state.filter(
        (item) => !(item.id === itemToRemove.id && item.size === itemToRemove.size)
      );
      localStorage.setItem('cart',JSON.stringify(state))
      return state;
    },
    removeAll(state,action){
       return state = action.payload
    }
    
  },
});

export const { add, increaseQuantity, decreaseQuantity, remove,removeAll } = cartSlice.actions;

export default cartSlice.reducer;

// Store cart in localStorage

const CART_STORAGE_KEY = "cart";

export const loadCartFromStorage = () => {
  const cartData = localStorage.getItem(CART_STORAGE_KEY);
  if (cartData) {
    return JSON.parse(cartData);
  }
  return [];
};

export const saveCartToStorage = (cart) => {
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
};

