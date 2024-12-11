import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { carrouter } from './app/modules/car/car.routes';
import { orderrouter } from './app/modules/order/order.route';
const app: Application = express();

app.use(express.json());
app.use(cors());
app.use('/api', carrouter);
app.use('/api', orderrouter);
app.get('/', (req: Request, res: Response) => {
    res.send({
      status: true,
      message: 'Car Server is Running',
    });
  });

export default app;
