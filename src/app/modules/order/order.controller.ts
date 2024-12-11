/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import orderSchema from './order.validation';
import { orderservice } from './order.services';

const orderCarController = async (req: Request, res: Response) => {
  try {
    // Validate request body using Zod
    const orderData = orderSchema.parse(req.body);
    // console.log(orderData);

    // Call the service to process the order
    const result = await orderservice.ordersintodb(orderData);

    res.status(201).json({
      message: 'Order created successfully',
      status: true,
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({
      message: error.message || 'Failed to create order',
      status: false,
      error: error.errors || error,
    });
  }
};
const getordercontroller = async (req: Request, res: Response) => {
  try {
    const totalRevenue = await orderservice.orderrevenueintodb();

    res.status(200).json({
      message: 'Revenue calculated successfully',
      status: true,
      data: {
        totalRevenue,
      },
    });
  } catch (error: any) {
    res.status(500).json({
      message: 'Failed to calculate revenue',
      status: false,
      error: error.message,
    });
  }
};
export const ordercontroller = {
  orderCarController,
  getordercontroller,
};
