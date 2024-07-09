import { z } from "zod";

const createProductValidationSchema = z.object({
    body: z.object({
        category: z.enum(["Indoor", "Outdoor", "Medicinal", "Flowering", "Fruit"], {
            required_error: "Category is required",
            invalid_type_error: "Invalid category",
        }),
        brand: z.string({ required_error: "brand is required" }),
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
    })
})
export const ProductValidations = {
    createProductValidationSchema
}