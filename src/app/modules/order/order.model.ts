import mongoose, { Schema } from 'mongoose';
import { Torder } from './order.interface';

const orderschema = new Schema<Torder>(
  {
    email: { type: String, required: true },
    car: { type: String, required: true },
    totalPrice: { type: Number, required: true },
    quantity: { type: Number, required: true },
  },
  {
    timestamps: true,
  },
);
export const OrderModel = mongoose.model('Order', orderschema);
// 