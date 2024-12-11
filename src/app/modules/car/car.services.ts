import { Request, Response } from "express";
import { CarModel } from "./car.model";
import { Tcar } from "./car.interface";
import { string } from "zod";

const createcarintodb = async(car:Tcar)=>{
    const result = await CarModel.create(car)
    return result
}
const getallcarsfromdb = async()=>{
    const result = await CarModel.find()
    return result
}

const getsinglecarfromdb = async(carId:string)=>{
const result = await CarModel.findOne({_id:carId})
return result
}
const deleteacarfromdb = async(carId:string )=>{
    const result = await CarModel.findOneAndDelete({_id:carId})
    return result
}
const updatecarfromdb = async(carId:string,updatedata :Partial<Tcar>)=>{
    const result = await CarModel.findByIdAndUpdate(carId,updatedata,{ new: true, runValidators: true } )
    return result
}
const searchcarfromdb = async(searchTerm:string)=>{
    const result = await CarModel.find({
        $or: [
          { brand: { $regex: searchTerm, $options: 'i' } },
          { model: { $regex: searchTerm, $options: 'i' } },
          { category: { $regex: searchTerm, $options: 'i' } },
        ],
      });
      return result;

}
export const carservice ={
    createcarintodb,getallcarsfromdb,getsinglecarfromdb, deleteacarfromdb,updatecarfromdb,searchcarfromdb
}

