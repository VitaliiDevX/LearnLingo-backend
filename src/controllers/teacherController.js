import { Teacher } from '../models/teacher.js';

export const getTeachersController = async (req, res, next) => {
  const { language, level, price, page = 1, perPage = 4 } = req.query;
  const skip = (Number(page) - 1) * Number(perPage);

  const filter = {};
  if (language) filter.languages = { $in: [language] };
  if (level) filter.levels = { $in: [level] };
  if (price) filter.price_per_hour = { $lte: Number(price) };

  const teacherQuery = Teacher.find(filter);

  const [totalItems, teachers] = await Promise.all([
    teacherQuery.clone().countDocuments(),
    teacherQuery
      .sort({ createdAt: 1, _id: 1 })
      .skip(skip)
      .limit(Number(perPage)),
  ]);

  const totalPages = Math.ceil(totalItems / Number(perPage));

  res.status(200).json({
    page: Number(page),
    perPage: Number(perPage),
    totalItems,
    totalPages,
    teachers,
  });
};
