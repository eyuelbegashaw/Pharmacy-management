import mongoose, {mongo} from "mongoose";

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
      enum: ["male", "female"],
    },
    phone_number: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
      enum: ["active", "inactive"],
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minLength: 4,
    },
  },
  {
    timestamps: true,
  }
);

const user = mongoose.model("user", userSchema);

export default user;
