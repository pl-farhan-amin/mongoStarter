import express from "express";
import { aggregateProduct, getProduct } from "../controllers/product.js";

const productRouter = express.Router();

productRouter.get('/',getProduct);
productRouter.get('/aggregate',aggregateProduct);

export default productRouter;