import mongoose, { Schema } from "mongoose";
import { Tcar } from "./car.interface";

const carschema = new Schema<Tcar>({
    brand:{type:String,required:true},
    model:{type:String,required:true},
    year:{type:Number,required:true},
    price:{type:Number,required:true},
    category:{type:String,enum:{values:["Sedan","SUV","Truck"],message: '{VALUE} is not valid',},required:true},
    description:{type:String,required:true},
    quantity:{type:Number,required:true},
    inStock:{
        type:Boolean,
    default:false
      }
})
export const CarModel = mongoose.model('CarModel', carschema);