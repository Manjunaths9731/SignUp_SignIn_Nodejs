import express, { json } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './userRouter.js';

dotenv.config();

mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
        console.log("connected to db");
    }).catch((err) => {
        console.log(err.message);
    })
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/api', userRouter);
app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message });
  });
const port = 4000;
app.listen(port,() => {
    console.log("success");
})
