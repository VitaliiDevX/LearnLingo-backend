import { Joi, Segments } from 'celebrate';
import { emailRules, nameRules, phoneRules, teacherIdRules } from './common.js';

export const createBookingSchema = {
  [Segments.PARAMS]: Joi.object(teacherIdRules),

  [Segments.BODY]: Joi.object({
    name: nameRules.required(),
    email: emailRules.required(),
    phone: phoneRules.required(),
    reason: Joi.string().min(5).max(500).required(),
    isTrial: Joi.boolean(),
  }),
};
