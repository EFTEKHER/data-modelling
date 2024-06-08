import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    description: {
      required: true,
      type: String,
    },

    name: {
      required: true,
      type: String,
    },
    productImage: {
      required: true,
      type: String,
    },
    price: {
      type: Number,

      default: 0,
    },
    stock: {
      type: Number,
      default: 0,
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Category',
        required: true,
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required: true,  
    },
    
  },

  { timestamps: true }
);
