import { CarModel } from "../car/car.model";
import { Torder } from "./order.interface"
import { OrderModel } from "./order.model"

const ordersintodb = async(order:Torder)=>{
    const {  car,quantity } = order;
    const carDetails = await CarModel.findById(car);
    if (!carDetails) {
      throw new Error("Car not found");
    }
  
    if (carDetails.quantity < quantity) {
      throw new Error(`Insufficient stock. Only ${carDetails.quantity} cars available.`);
    }
  
    // Step 2: Reduce car quantity and update inStock flag
    carDetails.quantity -= quantity;
    carDetails.inStock = carDetails.quantity > 0;
    const result = await OrderModel.create(order)
    return result


}
const orderrevenueintodb = async ()=>{
    const revenueData = await OrderModel.aggregate([
        {
          $group: {
            _id: null, 
            totalRevenue: { $sum: "$totalPrice" } 
          }
        }
      ]);
    
      const totalRevenue = revenueData.length > 0 ? revenueData[0].totalRevenue : 0;
    
      return totalRevenue;
}
export const orderservice = {
    ordersintodb,orderrevenueintodb
}