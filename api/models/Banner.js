const mongoose = require("mongoose");

const BannerSchema = new mongoose.Schema(
  {
    image: {
      type: String,
      required: true,
      unique: true,
    },
    buttonText: {
      type: String,
      required: true,
      unique: true,
    },
    product: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      default: "",
    },
    smallText: {
      type: String,
      default: "",
    },
    midText: {
      type: String,
      default: "",
    },
    largeText1: {
      type: String,
      default: "",
    },
    largeText2: {
      type: String,
      default: "",
    },
    discount: {
      type: String,
      default: "",
    },
    saleTime: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Banner", BannerSchema);
