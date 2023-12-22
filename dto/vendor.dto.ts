export interface createVendors{
    name:string;
    ownerName:string;
    foodType:[string];
    pincode:string;
    address:string;
    phone :string;
    email:string;
    password:string;
    
}

export interface vendorUpdate
{
    name:string,
    address:string,
    phone:string,
    foodtypes:[string],
}

export interface vendorLoginInputs{
    email:string;
    password:string;
}


export interface VendorPayload
{
    __id:string;
    email:string;
    name:string;
    foodTypes:[string];
}


