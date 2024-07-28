import mongoose from "mongoose";

const offerSchema = new mongoose.Schema(
  {
    offerName: {
      type: String,
      trim: true,
      default: "",
    },
    discountPercentage: {
      type: Number,
      default: 0,
    },
    offerDescription: {
      type: String,
      trim: true,
      default: "",
    },
    startDate: {
      type: Date,
    },
    endDate: {
      type: Date,
    },
  },
  {
    _id: false,
  }
);

const categorySchema = new mongoose.Schema(
  {
    categoryName: {
      type: String,
      trim: true,
      required: true,
    },
    categoryDescription: {
      type: String,
      trim: true,
      required: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    offers: {
      type: offerSchema,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const Category = mongoose.model("Category", categorySchema);

export default Category;
