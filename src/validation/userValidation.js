import { Joi, Segments } from 'celebrate';
import { emailRules, nameRules, paginationRules } from './common.js';

export const updateUserSchema = {
  [Segments.BODY]: Joi.object({
    name: nameRules,
    email: emailRules,
  }).min(1),
};

export const getFavoritesSchema = {
  [Segments.QUERY]: Joi.object({
    ...paginationRules,
  }),
};
