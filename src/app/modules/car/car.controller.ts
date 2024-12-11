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
    
    message: 'Car created successfully',
    success: true,
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

const getcarcontroller = async(req:Request,res:Response)=>{
    try{
        const result = await carservice.getallcarsfromdb()
        res.status(200).json({
    
            message: 'Cars retrieved successfully',
            success: true,
            data: result, 
          });
    }  catch (error:any) {
        console.log(error);
        res.status(500).json({
          success: false,
          message:error.message || 'Failed to retrieved car',
          error: error,
        });
      }
}
const getsinglecarcontroller = async(req:Request,res:Response)=>{
  try{
    const {carId} = req.params
    console.log();
    const result = await carservice.getsinglecarfromdb(carId)
    res.status(200).json({
    
        message: 'Car retrieved successfully',
        success: true,
        data: result, 
      });
  } catch (error:any) {
    console.log(error);
    res.status(500).json({
      success: false,
      message:error.message || 'Failed to retrieved car',
      error: error,
    });
  }
}

const deleteacarcontroller = async (req:Request,res:Response)=>{
  try{
    const {carId}=req.params
    const result = await carservice.deleteacarfromdb(carId)
    res.status(200).json({
    
        message: 'Car deleted successfully',
        success: true,
        data: result, 
      });
  }  catch (error:any) {
    console.log(error);
    res.status(500).json({
      success: false,
      message:error.message || 'Failed to delete car',
      error: error,
    });
  }

}
export const carcontroller ={
    carcreatecontroller,getcarcontroller,getsinglecarcontroller,deleteacarcontroller
}