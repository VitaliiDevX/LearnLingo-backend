import { Schema, model } from 'mongoose';

const reviewSchema = new Schema(
  {
    reviewer_name: { type: String, required: true },
    reviewer_rating: { type: Number, required: true, min: 1, max: 5 },
    comment: { type: String, required: true },
  },
  { _id: false, timestamps: true },
);

const teacherSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    surname: { type: String, required: true, trim: true },
    languages: { type: [String], required: true },
    levels: { type: [String], required: true },
    rating: { type: Number, required: true, min: 0, max: 5 },
    reviews: [reviewSchema],
    price_per_hour: { type: Number, required: true, index: true },
    lessons_done: { type: Number, required: true, min: 0 },
    avatar_url: { type: String, required: true },
    lesson_info: { type: String, required: true },
    conditions: { type: [String], required: true },
    experience: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

teacherSchema.index({ languages: 1 });
teacherSchema.index({ levels: 1 });

export const Teacher = model('Teacher', teacherSchema);
