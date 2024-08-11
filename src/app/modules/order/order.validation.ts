import { z } from "zod";
const orderProductValidationSchema = z.object({
    _id: z.string().nonempty("Product ID is required"),
    image: z.string().url("Invalid URL for image"),
    price: z.number().min(0, "Price must be a positive number"),
    quantity: z.number().min(1, "Quantity must be at least 1"),
    stock: z.number().min(0, "Stock must be a positive number"),
    title: z.string().min(1, "Title is required"),
    totalPrice: z.number().min(0, "Total price must be a positive number"),
});
const orderValidationSchema = z.object({
    body: z.object({
        customerName: z.string().min(1, "Customer name is required"),
        phone: z.string().min(10, "Phone number must be at least 10 characters"),
        address: z.string().min(1, "Address is required"),
        items: z.array(orderProductValidationSchema).min(1, "At least one item must be ordered"),
        total: z.number().min(0, "Total price must be a positive number"),
        status: z.enum(["pending", "completed", "shipped", "delivered"]).optional(),
        orderDate: z.string().optional(),
    })
});
export const OrderValidations = {
    orderValidationSchema
}