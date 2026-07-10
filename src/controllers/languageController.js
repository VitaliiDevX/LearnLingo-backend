import createHttpError from 'http-errors';
import { Language } from '../models/language.js';

export const getLanguages = async (req, res) => {
  const languages = await Language.find();

  if (languages.length === 0) {
    throw createHttpError(404, 'Languages not found');
  }

  res.status(200).json(languages);
};
