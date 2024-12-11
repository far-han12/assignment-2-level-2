import { z } from 'zod';
const orderSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  car: z.string().min(1, { message: 'Car name is required' }),
  quantity: z
    .number()
    .int()
    .positive({ message: 'Quantity must be a positive integer' }),
  totalPrice: z
    .number()
    .positive({ message: 'Total price must be a positive number' }),
});

export default orderSchema;
