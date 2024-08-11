
import mongoose, { Schema } from "mongoose";
import { TProduct } from "./product.interface";

const productSchema = new Schema<TProduct>({
    category: {
        type: String,
        required: true,
        enum: ["Indoor", "Outdoor", "Medicinal", "Flowering", "Fruit"]
    },
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true
    },
    rating: {
        type: Number,
        required: true,
        min: 0,
        max: 5
    },
    image: {
        type: String,
        required: true
    },
    stock: {
        type: Number,
        required: true,
        min: 0
    }
}, {
    timestamps: true
})
export const Product = mongoose.model<TProduct>("Product", productSchema)