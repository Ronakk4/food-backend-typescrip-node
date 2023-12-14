import{Request,Response,NextFunction} from 'express'
import{createVendors} from'../dto';
import {Vendor} from '../models'
export const createVendor=async(req:Request,res:Response,result:NextFunction)=>{
const {name,address,pincode,foodType,email,phone,password,ownerName,} =<createVendors>req.body;

const exsitingVendor=await Vendor.findOne({email:email})
if(exsitingVendor !==null){
return res.json({"message":"vendor exists"})
}


const CreateVendor=Vendor.create({  
    name: name,
    address: address,
    pincode: pincode,
    foodType: foodType, 
    email: email,
    password: password,
    salt: "",
    ownerName: ownerName,
    phone: phone,
    rating: 0,
    serviceAvailable: false,
    coverImages: [],
    lat: 0,
    lng: 0


})
return res.json( createVendor );



}

export const getVendors=async(req:Request,res:Response,result:NextFunction)=>{


}
export const getVendoById=async(req:Request,res:Response,result:NextFunction)=>{




}