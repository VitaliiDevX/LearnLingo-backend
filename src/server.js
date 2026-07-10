import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import helmet from 'helmet';
import { errors } from 'celebrate';
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';
import { connectMongoDB } from './db/connectMongoDB.js';
import { logger } from './middleware/logger.js';
import { notFoundHandler } from './middleware/notFoundHandler.js';
import { errorHandler } from './middleware/errorHandler.js';
import authRoutes from './routes/authRoutes.js';
import teacherRoutes from './routes/teacherRoutes.js';
import userRoutes from './routes/userRoutes.js';
import languageRoutes from './routes/languageRoutes.js';
import priceRoutes from './routes/priceRoutes.js';

const app = express();
const PORT = process.env.PORT ?? 3001;

app.use(helmet());
app.use(logger);
app.use(express.json({ limit: '100kb' }));
app.use(
  cors({
    origin: [process.env.FRONTEND_DOMAIN, 'http://localhost:5173'],
    credentials: true,
  }),
);
app.use(cookieParser());

//!ROUTES
app.use('/auth', authRoutes);
app.use('/teachers', teacherRoutes);
app.use('/users', userRoutes);
app.use('/languages', languageRoutes);
app.use('/prices', priceRoutes);

//!ERRORS
app.use(errors());
app.use(notFoundHandler);
app.use(errorHandler);

//! MONGODB connection
await connectMongoDB();

//! Server connection
const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const shutdown = async () => {
  console.log('Shutting down server...');
  server.close(async () => {
    await mongoose.disconnect();
    console.log('Database disconnected');
    process.exit(0);
  });
};

process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);
