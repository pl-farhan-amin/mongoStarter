import express from "express";
import { addProduct, aggregateProduct, deleteProduct, editProduct, getProduct } from "../controllers/product.js";

const productRouter = express.Router();

productRouter.get('/',getProduct);
productRouter.get('/aggregate',aggregateProduct);
productRouter.post('/add-product',addProduct);
productRouter.put('/edit-product/:id',editProduct);
productRouter.delete('/delete-product/:id',deleteProduct);

export default productRouter;