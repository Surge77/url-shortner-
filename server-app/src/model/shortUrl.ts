import mongoose from "mongoose";
import { nanoid } from "nanoid";

const shortUrlSchema = new mongoose.Schema(
  {
    fullUrl: {
      type: String,
      required: true,
    },

    shortUrl: {
      type: String,
      required: true,
      default: () => nanoid().substring(0, 10), //random string ,length=21 takes first 10 chars
    },

    clicks: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  },
);

export const urlModel = mongoose.model("shortUrl", shortUrlSchema); //creates mongoose models and links to above schema
