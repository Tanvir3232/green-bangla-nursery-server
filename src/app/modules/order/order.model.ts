import mongoose, { Schema } from "mongoose";
import { TOrder } from "./order.interface";
const orderProductSchema: Schema = new Schema({
    _id: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
    stock: { type: Number, required: true },
    title: { type: String, required: true },
    totalPrice: { type: Number, required: true },
});

const orderSchema = new Schema<TOrder>({
    customerName: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    items: [orderProductSchema],
    total: { type: Number, required: true },
    status: {
        type: String,
        enum: ["pending", "completed", "shipped", "delivered"],
        default: "pending"
    },
    orderDate: { type: String, required: true },
})
const Order = mongoose.model<TOrder>("Order", orderSchema)
export default Order;