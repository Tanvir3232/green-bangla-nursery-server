export type TProduct = {
    category: "Indoor" | "Outdoor" | "Medicinal" | "Flowering" | "Fruit";
    title: string;
    price: number;
    description: string;
    rating: number;
    image: string;
    stock: number;
}