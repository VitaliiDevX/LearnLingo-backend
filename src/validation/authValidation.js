import { Joi, Segments } from 'celebrate';
import { emailRules, nameRules, passwordRules } from './common.js';

export const registerSchema = {
  [Segments.BODY]: Joi.object({
    name: nameRules.required(),
    email: emailRules.required(),
    password: passwordRules.required(),
  }),
};

export const loginSchema = {
  [Segments.BODY]: Joi.object({
    email: emailRules.required(),
    password: passwordRules.required(),
  }),
};
