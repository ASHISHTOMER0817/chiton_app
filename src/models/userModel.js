import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please provide a username"],
      unique: true,
    },
    email: {
      type: String,
      required: [true, "Please provide a username"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please provide a username"],
      unique: true,
    },
    PhoneNumber: {
      type: String,
      required: true,
      unique: true
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timeStamp: true }
);

const User = mongoose.models.users || mongoose.model("Users", userSchema);

export default User;
