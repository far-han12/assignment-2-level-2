import express from 'express';
import { ordercontroller } from './order.controller';
const router = express.Router();

router.post('/orders', ordercontroller.orderCarController);
router.get('/orders/revenue', ordercontroller.getordercontroller);
export const orderrouter = router;
