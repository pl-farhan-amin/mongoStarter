import Product from "../models/product.js";


export const getProduct = async(req,res) => {
    try {
        const response = await Product.find({price: {$gt: 1200}});
        return res.json(response);
    } catch (error) {
        console.log(error);
    }
}

export const aggregateProduct = async(req,res) => {
    try {
        const response = await Product.aggregate([
            {$match: {price: {$gt: 1200}}},
            {$group: {_id: "$_id",goldCustomerPrice: {$avg: {$multiply: ["$price",0.8]}}}},
        ]);
        return res.json(response);
    } catch (error) {
        console.log(error);
    }
}