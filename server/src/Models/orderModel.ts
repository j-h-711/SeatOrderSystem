import mongoose, { Document, Schema } from "mongoose";

export interface IOrder extends Document {
  tableNumber: number;
  items: Array<{
    menuId: string;
    quantity: number;
  }>;
  status: string;
}

const orderSchema = new Schema<IOrder>({
  tableNumber: { type: Number, required: true },
  items: [
    {
      menuId: { type: Schema.Types.ObjectId, ref: "Menu", required: true },
      quantity: { type: Number, required: true },
    },
  ],
  status: { type: String, default: "Pending" }, // 예를 들어, 'Pending', 'Completed'
});

const Order = mongoose.model<IOrder>("Order", orderSchema);

export default Order;
