import mongoose from "mongoose";

const stockSchema = mongoose.Schema(
  {
    date: {
      type: Date,
      required: true,
    },
    drug_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "drug",
      required: true,
    },
    supplier_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "supplier",
      required: true,
    },
    purchased_quantity: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const stock = mongoose.model("stock", stockSchema);

export default stock;
