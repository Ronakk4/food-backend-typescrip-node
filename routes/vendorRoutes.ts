import express,{ Express,Request,Response,NextFunction } from "express";
import {vendorLogin,getVendorProfile,updateVendorProfile}from '../controllers'
import {Authenticate} from'../middlewares';



const router=express.Router();
router.get('/',(req:Request,res:Response,next:NextFunction)=>{

    res.json({message:"hello from vendor"})
})

router.post('/login',vendorLogin);
router.use(Authenticate);
router.get('/profile',getVendorProfile);
router.patch('/profile',updateVendorProfile);

export{router as vendorRoute};
 