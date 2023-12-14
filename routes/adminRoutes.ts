import express,{ Express, NextFunction,Request,Response} from "express";
import{createVendor, getVendoById, getVendors} from '../controllers';



const router=express.Router();
router.post('/vendor',createVendor);
router.get('/vendors',getVendors);
router.get('./vendors/:id',getVendoById);
router.get('/',(req:Request,res:Response,next:NextFunction)=>{ 

    res.json({message:"hello from admin"})
})
 
export{router as adminRoute};
