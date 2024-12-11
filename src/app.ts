import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { carrouter } from './app/modules/car/car.routes';
const app: Application = express();

app.use(express.json());
app.use(cors());
app.use("/api",carrouter)


export default app;