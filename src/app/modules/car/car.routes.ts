import express from "express";
import { carcontroller } from "./car.controller";
const router = express.Router()

router.post("/cars",carcontroller.carcreatecontroller)

export const carrouter =  router