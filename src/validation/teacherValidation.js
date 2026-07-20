import { Joi, Segments } from 'celebrate';
import { paginationRules, teacherIdRules } from './common.js';

export const getTeachersSchema = {
  [Segments.QUERY]: Joi.object({
    ...paginationRules,
    language: Joi.string().trim().allow('').optional(),
    level: Joi.string().trim().allow('').optional(),
    price: Joi.number().positive().optional(),
  }),
};

export const teacherParamSchema = {
  [Segments.PARAMS]: Joi.object(teacherIdRules),
};
