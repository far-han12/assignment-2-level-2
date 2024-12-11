import { Request, Response } from "express"
import carschema from "./car.validation"
import { carservice } from "./car.services"

const carcreatecontroller=async (req:Request,res:Response) => {
try{
const c = req.body
console.log(req.body);
const zodparsed = carschema.parse(c)
const result = await carservice.createcarintodb(zodparsed)
res.status(200).json({
    success: true,
    message: 'Car Created successfully',
    data: result,
  });
}  catch (error:any) {
    console.log(error);
    res.status(500).json({
      success: false,
      message:error.message || 'Failed to create car',
      error: error,
    });
  }
}
export const carcontroller ={
    carcreatecontroller
}