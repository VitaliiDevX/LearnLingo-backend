import createHttpError from 'http-errors';
import { Booking } from '../models/booking.js';
import { Teacher } from '../models/teacher.js';

export const createBookingController = async (req, res) => {
  const { teacherId } = req.params;
  const { name, email, phone, reason, isTrial } = req.body;

  const teacher = await Teacher.findById(teacherId).lean();
  if (!teacher) throw createHttpError(404, 'Teacher not found');

  if (isTrial) {
    const existingTrial = await Booking.findOne({
      teacherId,
      email,
      isTrial: true,
      status: { $ne: 'cancelled' },
    });

    if (existingTrial)
      throw createHttpError(409, 'Trial lesson already booked');
  }

  await Booking.create({
    teacherId,
    name,
    email,
    phone,
    reason,
    isTrial,
  });

  res.status(201).json('Lesson booked successfully!');
};
