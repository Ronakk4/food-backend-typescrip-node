import express,{ Express,Request,Response,NextFunction } from "express";
const router=express.Router();
router.get('/',(req:Request,res:Response,next:NextFunction)=>{

    res.json({message:"hello from vendor"})
})



export{router as vendorRoute};