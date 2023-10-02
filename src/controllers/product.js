import { INSERT_DATA } from "../constants/index.js";
import Product from "../models/product.js";


export const getProduct = async (req, res) => {
    try {
        const response = await Product.find({ price: { $gt: 1200 } });
        return res.json(response);
    } catch (error) {
        console.log(error);
    }
}

export const aggregateProduct = async (req, res) => {
    try {
        const response = await Product.aggregate([
            { $match: { price: { $gt: 1200 } } },
            { $group: { _id: "$_id", goldCustomerPrice: { $avg: { $multiply: ["$price", 0.8] } } } },
        ]);
        return res.json(response);
    } catch (error) {
        console.log(error);
    }
}

export const addProduct = async (req, res) => {
    try {
        const response = await Product.create(req.body);
        res.status(200).json(response);
    } catch (error) {
        console.log(error);
    }
}

export const editProduct = async(req,res) => {
    const { id } = req.params;
    try {
        await Product.findByIdAndUpdate(id,req.body);
        res.status(200).send({message: `Id: ${id} Updated Successfully`})
    } catch (error) {
        console.log(error);
    }
}

export const deleteProduct = async(req,res) => {
    const {id} = req.params;
    try {
        await Product.findByIdAndRemove(id);
        res.status(200).send({message: `Id:${id} Removed Successfully`});
    } catch (error) {
        console.log(error);
    }
}