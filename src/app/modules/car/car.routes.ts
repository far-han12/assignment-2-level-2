import express from "express";
import { carcontroller } from "./car.controller";
const router = express.Router()

router.post("/cars",carcontroller.carcreatecontroller)
router.get("/cars",carcontroller.getcarcontroller)
router.get("/cars/:carId",carcontroller.getsinglecarcontroller)
router.delete("/cars/:carId",carcontroller.deleteacarcontroller)

export const carrouter =  router