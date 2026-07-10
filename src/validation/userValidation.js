import { Joi, Segments } from 'celebrate';
import mongoose from 'mongoose';

const objectIdValidator = (value, helpers) => {
  if (!mongoose.Types.ObjectId.isValid(value)) {
    return helpers.error('any.invalid');
  }
  return value;
};

export const paginationParams = Joi.object({
  page: Joi.number().integer().min(1).default(1),
  perPage: Joi.number().integer().min(1).max(50).default(4),
});

export const updateUserSchema = {
  [Segments.BODY]: Joi.object()
    .keys({
      name: Joi.string().min(3).max(32),
      email: Joi.string().email().max(64),
    })
    .min(1),
};

export const teacherParamSchema = {
  [Segments.PARAMS]: Joi.object({
    teacherId: Joi.string().custom(objectIdValidator).required().messages({
      'string.base': 'Teacher id must be a string',
      'any.required': 'Teacher id is required',
      'any.invalid': 'Teacher id must be a valid ObjectId',
    }),
  }),
};
