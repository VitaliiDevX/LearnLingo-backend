import { Joi } from 'celebrate';
import mongoose from 'mongoose';

export const objectIdValidator = (value, helpers) => {
  if (!mongoose.Types.ObjectId.isValid(value)) {
    return helpers.error('any.invalid');
  }
  return value;
};

export const nameRules = Joi.string().min(3).max(32);
export const emailRules = Joi.string().email().max(64);
export const passwordRules = Joi.string().min(8).max(128);
export const phoneRules = Joi.string()
  .pattern(/^\d{12}$/)
  .messages({
    'string.pattern.base': 'Phone number must be exactly 12 digits (380...)',
  });

export const teacherIdRules = {
  teacherId: Joi.string().custom(objectIdValidator).required().messages({
    'string.base': 'Teacher id must be a string',
    'any.required': 'Teacher id is required',
    'any.invalid': 'Teacher id must be a valid ObjectId',
  }),
};

export const paginationRules = {
  page: Joi.number().integer().min(1).default(1),
  perPage: Joi.number().integer().min(1).max(20).default(4),
};
