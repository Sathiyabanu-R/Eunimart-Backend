import mongoose from "mongoose";

const uploadSchema = new mongoose.Schema(
  {
    Message: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
export const uploadModel = new mongoose.model("upload", uploadSchema);
