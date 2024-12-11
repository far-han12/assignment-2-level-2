import { Request, Response } from "express";
import { CarModel } from "./car.model";
import { Tcar } from "./car.interface";

const createcarintodb = async(car:Tcar)=>{
    const result = await CarModel.create(car)
    return result
}
const getallcarsfromdb = async()=>{
    const result = await CarModel.find()
    return result
}
export const carservice ={
    createcarintodb,getallcarsfromdb
}