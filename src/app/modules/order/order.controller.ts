import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { OrderSevices } from "./order.service";

const createOrder = catchAsync(async (req, res) => {

    const result = await OrderSevices.createOrderIntoDB(req.body);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Order created successfully",
        data: result
    })
})
const getAllOrders = catchAsync(async (req, res) => {
    const result = await OrderSevices.getAllOrdersFromDB();
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Orders are retrived successfully",
        data: result
    })
})
export const OrderControllers = {
    createOrder,
    getAllOrders
}