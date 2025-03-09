import express, { Application } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';
import routes from './routes';

dotenv.config();

const app: Application = express();
app.use(cors());
app.use(express.json());
app.use('/api/v1', routes);

const PORT = process.env.PORT;

mongoose
  .connect(process.env.MONGO_URI as string)
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.error(err));

app.listen(PORT, (): void => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
