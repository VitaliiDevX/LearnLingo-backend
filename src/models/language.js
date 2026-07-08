import { model, Schema } from 'mongoose';

const languageSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
  },
  { versionKey: false, timestamps: true },
);

languageSchema.index({ name: 1 });

export const Language = model('Language', languageSchema);
