import { Router } from 'express';
import { getPrices } from '../controllers/priceController.js';

const router = Router();

router.get('/', getPrices);

export default router;
