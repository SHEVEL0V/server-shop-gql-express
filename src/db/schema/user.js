/** @format */
import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: String,
    telephone: {
      type: String,
      required: [true, "Set telephone for user"],
      RegExp: /[+0-9]/,
      minLength: 6,
    },
    password: {
      type: String,
      required: [true, "Set password for user"],
      RegExp: /[a-zA-Z0-9]/,
      minLength: 6,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      RegExp:
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
      minLength: 3,
      maxLength: 30,
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },

    avatarURL: {
      type: String,
    },
    verify: {
      type: Boolean,
      default: false,
    },
    delivery: {
      type: String,
      default: "none",
    },
  },
  { versionKey: false, timestamps: true }
);

export default mongoose.model("users", userSchema);
