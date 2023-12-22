import { NextFunction,Request,Response,Express } from "express";
import { Authpayload } from "../dto/auth.dto";
import {validateSignature} from "../utility"

declare global{
   namespace Express{
    interface Request{
       user?: Authpayload;
    }
   }
}

export const Authenticate=async(req:Request,res:Response,next:NextFunction)=>{

    const validate=await validateSignature(req);
    if(validate)
    {
        next();
    }
    else{
        return res.json({"message":"user not authenticated"});
    }
}
