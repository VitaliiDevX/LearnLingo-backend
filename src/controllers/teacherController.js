import { Teacher } from '../models/teacher.js';

export const getTeachersController = async (req, res, next) => {
  const { language, level, price, page = 1, perPage = 4 } = req.query;
  const skip = (page - 1) * perPage;

  const filter = {};
  if (language) filter.languages = language;
  if (level) filter.levels = level;
  if (price) filter.price_per_hour = { $lte: price };

  const teacherQuery = Teacher.find(filter);

  const [totalItems, teachers] = await Promise.all([
    teacherQuery.clone().countDocuments(),
    teacherQuery.sort({ createdAt: 1, _id: 1 }).skip(skip).limit(perPage),
  ]);

  const totalPages = Math.ceil(totalItems / perPage);

  res.status(200).json({
    page: page,
    perPage: perPage,
    totalItems,
    totalPages,
    teachers,
  });
};
