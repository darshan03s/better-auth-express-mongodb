import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import 'dotenv/config';
import { createAuth } from './lib/auth.js';
import { connectDB } from './db/index.js';
import apiRoutes from './routes/api.routes.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(
  cors({
    origin: process.env.FRONTEND_URL!,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
  })
);
app.use(cookieParser());
app.use(morgan('tiny'));

async function start() {
  const { db, client } = await connectDB();
  createAuth(db, client);

  app.use('/api', apiRoutes);

  app.get('/health', (_req, res) => {
    res.status(200).json({ message: 'OK' });
  });

  app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
  });
}

start();
