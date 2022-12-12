import mongoose from "mongoose";

const transactionSchema = mongoose.Schema(
  {
    date: {
      type: Date,
      required: true,
    },
    drug_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "drug",
    },
    quantity: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    total_price: {
      type: Number,
      required: true,
    },
    sale_by: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "user",
    },
    profit: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const transaction = mongoose.model("transaction", transactionSchema);

export default transaction;
