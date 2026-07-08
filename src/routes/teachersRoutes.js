import { Router } from 'express';
import { celebrate } from 'celebrate';
import { getTeachersController } from '../controllers/teacherController.js';
import { getTeachersSchema } from '../validation/teacherValidation.js';

const router = Router();

router.get('/', celebrate(getTeachersSchema), getTeachersController);

export default router;
