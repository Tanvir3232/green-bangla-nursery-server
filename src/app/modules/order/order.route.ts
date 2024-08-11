import { Router } from "express";
import validateRequest from "../../middlewares/validateRequest";
import { OrderControllers } from "./order.controller";
import { OrderValidations } from "./order.validation";

const router = Router();
router.get('/', OrderControllers.getAllOrders);
router.post(
    '/create-order',
    validateRequest(OrderValidations.orderValidationSchema),
    OrderControllers.createOrder
)

export const OrderRoutes = router;