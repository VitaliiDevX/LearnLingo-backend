import { model, Schema } from 'mongoose';

const bookingSchema = new Schema(
  {
    teacherId: { type: Schema.Types.ObjectId, ref: 'Teacher', required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    reason: { type: String, required: true },
    isTrial: { type: Boolean, default: false },
    status: {
      type: String,
      enum: ['pending', 'confirmed', 'completed', 'cancelled'],
      default: 'pending',
    },
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

export const Booking = model('Booking', bookingSchema);
