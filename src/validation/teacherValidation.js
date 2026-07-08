import { Joi, Segments } from 'celebrate';

export const getTeachersSchema = {
  [Segments.QUERY]: Joi.object({
    page: Joi.number().integer().min(1).default(1),
    perPage: Joi.number().integer().min(1).max(20).default(4),
    language: Joi.string().trim().allow('').optional(),
    level: Joi.string().trim().allow('').optional(),
    price: Joi.number().positive().optional(),
  }),
};
