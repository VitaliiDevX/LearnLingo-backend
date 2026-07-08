import { model, Schema } from 'mongoose';

const priceSchema = new Schema(
  {
    value: { type: Number, required: true, unique: true },
  },
  { versionKey: false, timestamps: true },
);

priceSchema.index({ value: 1 });

export const Price = model('Price', priceSchema);
