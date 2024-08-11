
export type TOrder = {
    customerName: string;
    phone: string;
    address: string;
    items: TOrderProduct[];
    total: number;
    status: string;
    orderDate: string;
}
export type TOrderProduct = {
    _id: string;
    image: string;
    price: number;
    quantity: number;
    stock: number;
    title: string;
    totalPrice: number;
}