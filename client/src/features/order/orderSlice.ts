import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface OrderItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface OrderState {
  items: OrderItem[];
}

const initialState: OrderState = {
  items: [],
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    addOrder: (state, action: PayloadAction<OrderItem[]>) => {
      state.items = [...state.items, ...action.payload];
    },
    clearOrders: (state) => {
      state.items = [];
    },
  },
});

export const { addOrder, clearOrders } = orderSlice.actions;
export default orderSlice.reducer;
