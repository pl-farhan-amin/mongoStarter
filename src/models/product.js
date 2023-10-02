import mongoose from "mongoose";
import productSchema from "../schemas/product.js";

const Product = new mongoose.model('Product', productSchema);

export default Product;