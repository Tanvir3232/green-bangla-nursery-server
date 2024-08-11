import { TOrderProduct } from "./order.interface";
import Order from "./order.model";

const createOrderIntoDB = async (payload: TOrderProduct) => {
    const result = await Order.create(payload);
    return result;
}
const getAllOrdersFromDB = async () => {
    const result = await Order.find();
    return result;
}

export const OrderSevices = {
    createOrderIntoDB,
    getAllOrdersFromDB
}