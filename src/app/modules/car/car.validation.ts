import { z } from "zod";

const carschema = z.object({
    brand: z.string({
      required_error: "Brand is required",
      invalid_type_error: "Brand must be a string",
    }).min(1, "Brand cannot be empty"),
  
    model: z.string({
      required_error: "Model is required",
      invalid_type_error: "Model must be a string",
    }).min(1, "Model cannot be empty"),
  
    year: z.number({
      required_error: "Year is required",
      invalid_type_error: "Year must be a number",
    }).int("Year must be an integer").min(1886, "Year must be a valid year"), // Cars were invented around 1886
  
    price: z.number({
      required_error: "Price is required",
      invalid_type_error: "Price must be a number",
    }).positive("Price must be a positive number"),
  
    category: z.enum(["Sedan", "SUV", "Truck"], {
      errorMap: () => ({
        message: "Category must be one of the following values: Sedan, SUV, or Truck",
      }),
    }),
  
    description: z.string({
      required_error: "Description is required",
      invalid_type_error: "Description must be a string",
    }).min(10, "Description must be at least 10 characters long"),
  
    quantity: z.number({
      required_error: "Quantity is required",
      invalid_type_error: "Quantity must be a number",
    }).int("Quantity must be an integer").nonnegative("Quantity cannot be negative"),
  
    inStock: z.boolean({
      required_error: "In-stock status is required",
      invalid_type_error: "In-stock status must be a boolean",
    }).default(false),
  });

export default carschema