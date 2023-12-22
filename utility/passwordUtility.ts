import bcrypt from 'bcrypt';
import {Vendor} from '../models'
import { VendorPayload } from '../dto';
import jwt from 'jsonwebtoken';
import {app_sec} from '../config'
import { JsonWebTokenError } from 'jsonwebtoken';
import { Express,Request } from 'express';
import { Authpayload } from '../dto/auth.dto';
import {}from '../middlewares';

  

export const GenerateSalt=async()=>{
 return await bcrypt.genSalt()
    
}

export const GeneratePassword=async(password:string,salt:string)=>{
    return await bcrypt.hash(password,salt);



}
export const validate=async(email:string,password:string)=>{
    const vendors=await Vendor.findOne({email:email});
    
    
    if(vendors===null) return false
     
    const has1=await GeneratePassword(password,vendors.salt)
    
    if(has1===vendors.password)
    return true;
    
}

export const generateSignature=(payload:VendorPayload)=>{
    return jwt.sign(payload, app_sec, { expiresIn: '1d'});
}

export const validateSignature=async(req:Request)=>{
    const signature=req.get("Authorization");
    if(signature){
        const payload=await jwt.verify(signature.split(' ')[1],app_sec) as Authpayload;
    req.user=payload;
    return true;
    
    
    
    }
}