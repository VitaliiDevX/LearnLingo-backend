import { Router } from 'express';
import { celebrate } from 'celebrate';
import {
  addToFavorites,
  deleteUser,
  getFavoriteTeachers,
  getUserProfile,
  removeFromFavorites,
  updateUser,
} from '../controllers/userController.js';

import { authenticate } from '../middleware/authenticate.js';
import {
  getFavoritesSchema,
  updateUserSchema,
} from '../validation/userValidation.js';
import { teacherParamSchema } from '../validation/teacherValidation.js';

const router = Router();

router.get('/me', authenticate, getUserProfile);
router.patch('/me', authenticate, celebrate(updateUserSchema), updateUser);

router.delete('/me', authenticate, deleteUser);

router.get(
  '/favorites',
  authenticate,
  celebrate(getFavoritesSchema),
  getFavoriteTeachers,
);

router.post(
  '/favorites/:teacherId',
  authenticate,
  celebrate(teacherParamSchema),
  addToFavorites,
);
router.delete(
  '/favorites/:teacherId',
  authenticate,
  celebrate(teacherParamSchema),
  removeFromFavorites,
);

export default router;
