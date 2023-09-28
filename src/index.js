import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import productRouter from './routers/product.js';
dotenv.config()

const app = express();

app.use(cors());

app.use(express.json());

mongoose.connect(`${process.env.MONGO_URL}`).then(() => console.log(`Connected to DB.`));

app.use('/products',productRouter);

app.listen(process.env.PORT,() => console.log(`Server Started At Port ${process.env.PORT}`))