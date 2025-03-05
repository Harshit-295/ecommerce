import { DB_NAME } from "./constants.js";
import mongoose, { connect } from "mongoose";
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import {app} from "./app.js";

dotenv.config({
    path:'./.env'
})


connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000 ,()=>{
        console.log(`Server is runnig at port : ${process.env.PORT}`)
    })
})
.catch((err)=>{
    console.log(`Failed to connect the database`,err)
})
