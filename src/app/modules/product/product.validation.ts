import { z } from "zod";

const createProductValidationSchema = z.object({
    body: z.object({
        category: z.enum(["Indoor", "Outdoor", "Medicinal", "Flowering", "Fruit"], {
            required_error: "Category is required",
            invalid_type_error: "Invalid category",
        }),

        title: z.string({ required_error: "title is required" }),
        price: z.number({
            required_error: "price is required",
            invalid_type_error: "Price must be a number",
        }).positive("Price must be a positive number"),
        description: z.string({ required_error: "description is required" }),
        rating: z.number({
            required_error: "rating is required",
            invalid_type_error: "Rating must be a number",
        }).min(0, "Rating cannot be less than 0")
            .max(5, "Rating cannot be more than 5"),
        image: z.string({
            required_error: "Image is required",
        }).url("Image must be a valid URL"),
        stock: z.number({
            required_error: "stock is required",
            invalid_type_error: "stock must be a number",
        }).min(0, "stock cannot be negative")
    })
})

const updateProductValidationSchema = z.object({
    body: z.object({
        category: z.enum(["Indoor", "Outdoor", "Medicinal", "Flowering", "Fruit"], {
            invalid_type_error: "Invalid category",
        }).optional(),

        title: z.string().optional(),
        price: z.number({
            invalid_type_error: "Price must be a number",
        }).positive("Price must be a positive number").optional(),
        description: z.string().optional(),
        rating: z.number({
            invalid_type_error: "Rating must be a number",
        }).min(0, "Rating cannot be less than 0")
            .max(5, "Rating cannot be more than 5").optional(),
        image: z.string().url("Image must be a valid URL").optional(),
        stock: z.number({
            invalid_type_error: "stock must be a number",
        }).min(0, "stock cannot be negative").optional()
    })
})
export const ProductValidations = {
    createProductValidationSchema,
    updateProductValidationSchema
}