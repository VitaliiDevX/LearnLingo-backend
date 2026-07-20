import { Router } from 'express';
import { celebrate } from 'celebrate';
import { createBookingSchema } from '../validation/bookingValidation.js';
import { createBookingController } from '../controllers/bookingController.js';

const router = Router();

router.post(
  '/:teacherId',
  celebrate(createBookingSchema),
  createBookingController,
);

export default router;
