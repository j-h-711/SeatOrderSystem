import mongoose, { Document, Schema } from "mongoose";

export interface IMenu extends Document {
  _id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image?: string;
}

const menuSchema = new Schema<IMenu>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  image: { type: String },
});

const Menu = mongoose.model<IMenu>("Menu", menuSchema);

export default Menu;
