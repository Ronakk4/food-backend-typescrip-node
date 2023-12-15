import mongoose, { Mongoose,Schema,deleteModel,model } from "mongoose";

interface vendordoc extends Document{
    name:string;
    ownerName:string;
    foodType:[string];
    pincode:string;
    address:string;
    phone :string;
    email:string;
    password:string;
    serviceAvailable:[string],
    ratings:number;
    salt:string;
    foods:any;
    coverImages:[String],
}
const VendorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    ownerName: { type: String, required: true },
    foodType: { type: [String], required: true },
    pincode: { type: String },
    address: { type: String },
    phone: { type: String },
    email: { type: String },
    password: { type: String, required: true },
    serviceAvailable: { type: Boolean },
    ratings: { type: Number },
    salt: { type: String },
    foods: [{ type: mongoose.Schema.ObjectId }],
},
{
    toJSON:{
        transform(doc,ret){
            delete ret.password;
            delete ret.salt;
            delete ret.__v;
            delete ret.createdAt;
            delete ret.updateAt;
        }
    },









 timestamps: true });

const Vendor = mongoose.model<vendordoc>('Vendor', VendorSchema);

export {Vendor}