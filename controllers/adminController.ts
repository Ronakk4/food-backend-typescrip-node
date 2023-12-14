import{Request,Response,NextFunction} from 'express'
import{createVendors} from'../dto';
import {Vendor} from '../models'
export const createVendor=async(req:Request,res:Response,result:NextFunction)=>{
const {name,address,pincode,foodType,email,phone,password,ownerName} =<createVendors>req.body;
const CreateVendor=Vendor.create({
name:name,
address:address,
email:email,
password:password,
phone:phone,


})
return res.json( {name,address,pincode,foodType,email,phone,password,ownerName} );



}

export const getVendors=async(req:Request,res:Response,result:NextFunction)=>{


}
export const getVendoById=async(req:Request,res:Response,result:NextFunction)=>{




}