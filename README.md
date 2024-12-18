# Car Store B4A2V3

## **Project Overview**
The **Car-Store B4A2V3** is a  back-end application builted by using **TypeScript**, **Express.js**, and **MongoDB**. The application allows users to manage an inventory of cars, place orders, and calculate total revenue. It features full **CRUD operations** for both **Cars** and **Orders**, with proper error handling and validations to ensure data integrity.


## **Project Live-Link**

[Live-Link](https://assignment-2-iota-snowy.vercel.app/)
--


## **Features**
1. **Car Management**: Create, Read, Update, and Delete (CRUD) operations for cars.
2. **Order Placement**: Users can place orders for available cars.
3. **Inventory Management**: Updates stock quantity and in-stock status when an order is placed.
4. **Revenue Calculation**: Calculate the total revenue from all car orders.
5. **Error Handling**: Proper error handling with descriptive error messages for validation failures, 404s, and server errors.
6. **Search Functionality**: Query cars by brand, model, or category.

---

## **Technologies Used**
- **Node.js**
- **Express.js**
- **TypeScript**
- **MongoDB**
- **Mongoose**

---

## **Installation and Setup**

### **Installation**

1. **Clone the repository**
   ```bash
   git clone https://github.com/far-han12/assignment-2-level-2.git
   cd assignment-2-level-2
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables** (see [Environment Variables](#environment-variables) section for details)

4. **Run the server locally**
   ```bash
   npm run start:dev
   ```
   The server will be available at `http://localhost:5000/`.

5. **Build for production**
   ```bash
   npm run build
   ```
   
---

## **Environment Variables**
Create a `.env` file in the root directory with the following variables:

```
PORT=5000
DATABASE_URL=<your-mongo-connection-string>
```

Replace `<your-mongo-connection-string>` with your MongoDB URL.

---

## **API Endpoints**

### **Car Endpoints**

1. **Create a Car**
   - **Endpoint:** `https://assignment-2-iota-snowy.vercel.app/api/cars`
   - **Method:** `POST`
   - **Request Body:**
     ```json
     {
       "brand": "Toyota",
       "model": "Camry",
       "year": 2024,
       "price": 25000,
       "category": "Sedan",
       "description": "A reliable family sedan with modern features.",
       "quantity": 50,
       "inStock": true
     }
     ```
   - **Response:** Returns a success message and the created car.

2. **Get All Cars**
   - **Endpoint:** `https://assignment-2-iota-snowy.vercel.app/api/cars`
   - **Method:** `GET`
   - **Query:** Filter cars by brand, model, or category.

3. **Get a Specific Car**
   - **Endpoint:** `https://assignment-2-iota-snowy.vercel.app/api/cars/:carId`
   - **Method:** `GET`
   - **Response:** Returns details of a specific car.

4. **Update a Car**
   - **Endpoint:** `https://assignment-2-iota-snowy.vercel.app/api/cars/:carId`
   - **Method:** `PUT`
   - **Request Body:** (fields to update, e.g., price or quantity)

5. **Delete a Car**
   - **Endpoint:** `https://assignment-2-iota-snowy.vercel.app/api/cars/:carId`
   - **Method:** `DELETE`

---

### **Order Endpoints**

1. **Create an Order**
   - **Endpoint:** `https://assignment-2-iota-snowy.vercel.app/api/orders`
   - **Method:** `POST`
   - **Request Body:**
     ```json
     {
       "email": "customer@example.com",
       "car": "648a45e5f0123c45678d9012",
       "quantity": 1,
       "totalPrice": 27000
     }
     ```
   - **Response:** Returns a success message and the created order.

2. **Revenue Calculation**
The total revenue is calculated using the following aggregation:
```javascript
Order.aggregate([
  { $group: { _id: null, totalRevenue: { $sum: "$totalPrice" } } }
])
```
**Endpoint:** `https://assignment-2-iota-snowy.vercel.app/api/orders/revenue`

**Response:**
```json
{
  "message": "Revenue calculated successfully",
  "status": true,
  "data": {
    "totalRevenue": 810000
  }
}
```

---

## **Error Handling**
All errors are handled using a consistent JSON response format:
```json
{
  "message": "Validation failed",
  "success": false,
  "error": {
    "name": "ValidationError",
    "errors": {
      "price": {
        "message": "Price must be a positive number",
        "name": "ValidatorError"
      }
    }
  }
}
```

**Common Error Types:**
- **Validation Errors**: Invalid data input.
- **404 Not Found**: Car or order not found.
- **500 Internal Server Error**: General server error.

---




