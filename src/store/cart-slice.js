import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
  },
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existItem = state.items.find((item) => item.id === newItem.id);

      state.totalQuantity++;

      if (!existItem) {
        //state.totalQuantity++;
        newItem.name = action.payload.title;
        newItem.quntity = 1;
        newItem.totalPrice = newItem.price;
        state.items.push(newItem);
      } else {
        existItem.quntity = existItem.quntity + 1;
        existItem.totalPrice = existItem.price * existItem.quntity;
      }
    },
    removeItemFromCart(state, action) {
      const deleteItem = action.payload;
      const existItem = state.items.find((item) => item.id === deleteItem.id);

      if (existItem) {
        //existItem.quntity--;

        existItem.quntity = existItem.quntity - 1;
        existItem.totalPrice = existItem.price * existItem.quntity;

        state.totalQuantity--;
      }
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
