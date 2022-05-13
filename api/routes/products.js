const router = require("express").Router();
const Product = require("../models/Product");
// const { findByIdAndDelete } = require("../models/Post");

//CREATE PRODUCT
router.post("/", async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    const savedPost = await newProduct.save();
    res.status(200).json(savedPost);
  } catch (error) {
    return res.status(500).json(error);
  }
});

// GET PRODUCT
router.get("/:slug", async (req, res) => {
  try {
    const product = await Product.findOne({ slug: req.params.slug });
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json(error);
  }
});

// GET PRODUCTS
router.get("/", async (req, res) => {
  try {
    let products = (await Product.find()).reverse();

    res.status(200).json(products);
  } catch (error) {
    res.status(500).json(error);
  }
});

//UPDATE PRODUCT
router.put("/:slug", async (req, res) => {
  try {
    const product = await Product.findOne({ slug: req.params.slug });
    const id = product._id.toString();
    if (id === req.body.id) {
      try {
        const updatedProduct = await Product.findByIdAndUpdate(
          req.body.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedProduct);
      } catch (error) {
        return res.status(500).json(error);
      }
    } else {
      res.status(401).json("You are not authorized to perform this action");
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

// DELETE POST
router.delete("/:slug", async (req, res) => {
  try {
    const product = await Product.findOne({ slug: req.params.slug });

    const id = product._id.toString();

    if (id === req.body.id) {
      try {
        // await findByIdAndDelete(req.params.id);
        await product.delete();
        res.status(200).json("Delete Successful!");
      } catch (error) {
        return res.status(500).json(error);
      }
    } else {
      res.status(401).json("You are not authorized to perform this action");
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
