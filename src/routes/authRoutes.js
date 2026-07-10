import { Router } from 'express';
import { celebrate } from 'celebrate';
import {
  registerUser,
  loginUser,
  refreshSession,
  logoutUser,
} from '../controllers/authController.js';
import { registerSchema, loginSchema } from '../validation/authValidation.js';

const router = Router();

router.post('/register', celebrate(registerSchema), registerUser);
router.post('/login', celebrate(loginSchema), loginUser);
router.get('/refresh', refreshSession);
router.post('/logout', logoutUser);

export default router;
