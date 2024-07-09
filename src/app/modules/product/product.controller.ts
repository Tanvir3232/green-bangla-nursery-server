import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { ProductServices } from "./product.service";

const addProduct = catchAsync(async (req, res) => {
    const result = await ProductServices.addProductIntoDB(req.body);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Product is added successfully",
        data: result
    })
})
const getAllProducts = catchAsync(async (req, res) => {
    const result = await ProductServices.getAllProductsFromDB();
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Products are retrieved successfully",
        data: result
    })
})
const getSingleProduct = catchAsync(async (req, res) => {
    const { id } = req.params;
    const result = await ProductServices.getSingleProductFromDB(id);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "product is retrived successfully",
        data: result
    })
})
const deleteProduct = catchAsync(async (req, res) => {
    const { id } = req.params;
    const result = await ProductServices.deleteProductFromDB(id);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Product is deleted successfully",
        data: result
    })
})
export const ProductControllers = {
    addProduct,
    getAllProducts,
    getSingleProduct,
    deleteProduct
}