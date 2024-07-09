import { Router } from "express";
import validateRequest from "../../middlewares/validateRequest";
import { ProductControllers } from "./product.controller";
import { ProductValidations } from "./product.validation";

const router = Router();
router.post(
    '/create-product',
    validateRequest(ProductValidations.createProductValidationSchema),
    ProductControllers.addProduct
)
router.get("/", ProductControllers.getAllProducts);
router.get("/:id", ProductControllers.getSingleProduct)
router.delete("/:id", ProductControllers.deleteProduct);
export const ProductRoutes = router;