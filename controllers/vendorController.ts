import { Express,NextFunction,Request,Response, request } from "express";
import { vendorLoginInputs, vendorUpdate } from "../dto";
import{Vendor} from '../models'
import {generateSignature, validate} from '../utility'
import { findVendor } from "./adminController";



export const vendorLogin=async(req:Request,res:Response,next:NextFunction)=>{
    const {email,password}=<vendorLoginInputs>req.body;
    const exsitingVendor=await Vendor.findOne({email:email}) 
    if(exsitingVendor == null)
    {
        res.status(401  ).send("Invalid email or password");
    
    }
    else{
       const a= await validate(email,password);
       if(a ==true) 
       {
        const signature=generateSignature({
            __id:exsitingVendor.id,
            email:exsitingVendor.email,
            name:exsitingVendor.name,
            foodTypes:exsitingVendor.foodType,

        })
        return res.json(signature);
            
        }
        else{
            res.status(401).send("Invalid password or login ");
        }

    }
}

export const getVendorProfile=async(req:Request,res:Response,next:NextFunction)=>{
const user=await req.user;
if(user)
{
    const vendor=await Vendor.findById(user.__id);
    return res.json(vendor);
}
}

export const updateVendorProfile=async(req:Request,res:Response,next:NextFunction)=>{
    const user=req.user;
    const{foodtypes,name,address,phone}=<vendorUpdate>req.body; 


        if(user)
        {
            const exsitingVendor=await Vendor.findById(user.__id);
            if(exsitingVendor!==null){
                exsitingVendor.name=name;
                exsitingVendor.address=address;
                exsitingVendor.phone=phone;
                exsitingVendor.foodType=foodtypes;
                
                const saveResult=await exsitingVendor.save();
                return res.json(exsitingVendor)
            }

        }
        res.json({"message":"No user"});
}

// export const updateVendorService=async (req:Request,res:Response,next:NextFunction) => {
//     const user=req.user;
//     const { lat, lng} = req.body;
// const existingVendor=Vendor.findById(user?.__id)
    
//     if(existingVendor !== null){

//         existingVendor. = !existingVendor.serviceAvailable;
//         if(lat && lng){
//             existingVendor.lat = lat;
//             existingVendor.lng = lng;
//         }
//         const saveResult = await existingVendor.save();

//         return res.json(saveResult);
 
    
    
// }
