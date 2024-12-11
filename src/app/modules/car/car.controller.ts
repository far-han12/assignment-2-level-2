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

const getcarcontroller = async (req: Request, res: Response): Promise<void> => {
    try {
      const { searchTerm } = req.query;
  
      let result;
      if (searchTerm) {
        result = await carservice.searchcarfromdb(
          searchTerm as string,
        );
      } else {
        result = await carservice.getallcarsfromdb();
      }
  
      if (result.length === 0) {
        res.status(404).json({
          message: 'No Cars found',
          status: true,
          data: [],
        });
      } else {
        res.status(200).json({
          message: 'Cars retrieved successfully',
          status: true,
          data: result,
        });
      }
    } catch (error: any) {
      res.status(500).json({
       
        status: false,
        message:error.message || 'Failed to retrieved car',
       error:error
      });
    }
  };
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
const updateacarcontroller = async (req:Request,res:Response)=>{
    try{
 
        const{carId}= req.params
        const updatebody = req.body
        const result = await carservice.updatecarfromdb(carId,updatebody)
        res.status(200).json({
    
            message: 'Car updated successfully',
            success: true,
            data: result, 
          });


  
  } catch (error:any) {
    console.log(error);
    res.status(500).json({
      success: false,
      message:error.message || 'Failed to delete car',
      error: error,
    });
  }

}
export const carcontroller ={
    carcreatecontroller,getcarcontroller,getsinglecarcontroller,deleteacarcontroller,updateacarcontroller
}