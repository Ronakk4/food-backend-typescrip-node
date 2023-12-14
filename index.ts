import express, { Express } from "express";
 import {adminRoute,vendorRoute} from './routes'
import bodyParser from "body-parser";
import mongoose from "mongoose";
import {MONGO_url} from './config'










const app=express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/admin',adminRoute)
app.use('/vendor',vendorRoute)

mongoose.connect(MONGO_url).then(result=>{
    console.log("connected to MongoDB");
}).catch(err=>console.log("error"+err))

app.listen(8000,()=>{
    console.log("app is listening to port 8000")
})
