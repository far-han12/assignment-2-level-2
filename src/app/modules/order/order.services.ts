import { CarModel } from '../car/car.model';
import { Torder } from './order.interface';
import { OrderModel } from './order.model';

const ordersintodb = async (order: Torder) => {
  const { car, quantity, email } = order;
  
  // Step 1: Check if the car exists
  const carDetails = await CarModel.findById(car);
  if (!carDetails) {
    throw new Error('Car not found');
  }


  if (carDetails.quantity < quantity) {
    throw new Error(`Insufficient stock. Only ${carDetails.quantity} cars available.`);
  }

 
  const totalPrice = carDetails.price * quantity;

  
  carDetails.quantity -= quantity;
  carDetails.inStock = carDetails.quantity > 0;
  await carDetails.save();

  const orderData = {
    ...order, 
    totalPrice 
  };


  const result = await OrderModel.create(orderData);
  return result;
};


const orderrevenueintodb = async () => {
  const revenueData = await OrderModel.aggregate([
    {
      $group: {
        _id: null,
        totalRevenue: { $sum: '$totalPrice' },
      },
    },
  ]);

  const totalRevenue = revenueData.length > 0 ? revenueData[0].totalRevenue : 0;

  return totalRevenue;
};
export const orderservice = {
  ordersintodb,
  orderrevenueintodb,
};
