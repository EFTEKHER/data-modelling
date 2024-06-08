import mongoose from "mongoose";
const orderItemSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
  },
  quantity: {
    type: Number,
    required: true,
  },
});
const productSchema = new mongoose.Schema(
  {
    OrderPrice: {
      type: Number,
      required: true,
    },
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    orderItems: {
      type: [orderItemSchema],
    },

    address: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["PENDING", "DELIVERED", "CANCELED"],
      default: "PENDING",
    },
  },
  { timestamps: true }
);

export const Product = mongoose.model("Product", productSchema);
