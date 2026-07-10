import createHttpError from 'http-errors';
import { User } from '../models/user.js';
import { Session } from '../models/session.js';
import { Teacher } from './../models/teacher.js';

export const getUserProfile = async (req, res) => {
  const user = await User.findById(req.user._id).select('-password');

  if (!user) throw createHttpError(404, 'User not found');

  res.status(200).json(user);
};

export const updateUser = async (req, res) => {
  const { name } = req.body;
  const user = await User.findById(req.user._id);

  if (!user) throw createHttpError(404, 'User not found');

  if (name) user.name = name;

  await user.save();
  res.status(200).json({ user, message: 'User updated successfully' });
};

export const getFavoriteTeachers = async (req, res) => {
  const { page = 1, perPage = 4 } = req.query;
  const skip = (Number(page) - 1) * Number(perPage);

  const user = await User.findById(req.user._id);
  const favoriteIds = user.favoriteTeachers;

  const [totalItems, teachers] = await Promise.all([
    Teacher.countDocuments({ _id: { $in: favoriteIds } }),
    Teacher.find({ _id: { $in: favoriteIds } })
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

export const addToFavorites = async (req, res) => {
  const { teacherId } = req.params;

  const teacherExists = await Teacher.findById(teacherId);
  if (!teacherExists) throw createHttpError(404, 'Teacher not found');

  await User.findByIdAndUpdate(req.user._id, {
    $addToSet: { favoriteTeachers: teacherId },
  });

  res.status(200).json({ message: 'Teacher added to favorites' });
};

export const removeFromFavorites = async (req, res) => {
  const { teacherId } = req.params;

  await User.findByIdAndUpdate(req.user._id, {
    $pull: { favoriteTeachers: teacherId },
  });

  res.status(200).json({ message: 'Teacher removed from favorites' });
};

export const deleteUser = async (req, res) => {
  const userId = req.user._id;

  await Promise.all([
    User.findByIdAndDelete(userId),
    Session.deleteMany({ userId }),
  ]);

  res.clearCookie('sessionId');
  res.clearCookie('accessToken');
  res.clearCookie('refreshToken');

  res.status(200).json({ message: 'User deleted successfully' });
};
