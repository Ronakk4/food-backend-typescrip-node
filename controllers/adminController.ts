import { Request, Response, NextFunction } from "express";
import { createVendors } from "../dto";
import { Vendor } from "../models";
import { GenerateSalt, GeneratePassword } from "../utility";

export const findVendor = async (id: string | undefined, email?: string) => {
  if (email) return await Vendor.findOne({ email: email });
  else return await Vendor.findById(id);
};

export const createVendor = async (
  req: Request,
  res: Response,
  result: NextFunction
) => {
  const {
    name,
    address,
    pincode,
    foodType,
    email,
    phone,
    password,
    ownerName,
  } = <createVendors>req.body;

  const exsitingVendor = await findVendor("", email);
  if (exsitingVendor !== null) {
    return res.json({ message: "vendor exists" });
  } else {
    const salt = await GenerateSalt();
    const passwordhashed = await GeneratePassword(password, salt);
    const CreateVendor = Vendor.create({
      name: name,
      address: address,
      pincode: pincode,
      foodType: foodType,
      email: email,
      password: passwordhashed,
      salt: salt,
      ownerName: ownerName,
      phone: phone,
      rating: 0,
      serviceAvailable: false,
      coverImages: [],
      lat: 0,
      lng: 0,
    });
    return res.json(createVendor);
  }
};

export const getVendors = async (
  req: Request,
  res: Response,
  result: NextFunction
) => {
  const vendors = await Vendor.find();
  if (vendors !== null) {
    return res.json(vendors);
  }
  return res.json({ message: "no vendors" });
};
export const getVendoById = async (
  req: Request,
  res: Response,
  result: NextFunction
) => {
  const parmId = req.params.id;
  const vendors = await Vendor.findById(parmId);
  if (vendors !== null) {
    return res.json(vendors);
  }
  return res.json({ message: "no vendors" });
};
