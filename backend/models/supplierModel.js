import mongoose from "mongoose";

const supplierSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phone_number: {
      type: String,
      required: true,
    },
    pdf_licence: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const supplier = mongoose.model("supplier", supplierSchema);

export default supplier;
