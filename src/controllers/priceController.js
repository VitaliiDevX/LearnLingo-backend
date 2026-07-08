import createHttpError from 'http-errors';
import { Price } from '../models/price.js';

export const getPrices = async (req, res) => {
  const prices = await Price.find().sort({ value: 1 });

  if (!prices) {
    throw createHttpError(404, 'Prices not found');
  }

  res.status(200).json(prices);
};
