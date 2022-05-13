const router = require("express").Router();
const Banner = require("../models/Banner");

// NEW Banner
router.post("/", async (req, res) => {
  const newBanner = new Banner(req.body);
  try {
    const savedBanner = await newBanner.save();
    res.status(200).json(savedBanner);
  } catch (error) {
    res.status(500).json(error);
  }
});

// GET Banner
router.get("/", async (req, res) => {

  try {
    const banner = (await Banner.find()).reverse();

    res.status(200).json(banner);
  } catch (error) {
    res.status(500).json(error);
  }
});

//UPDATE BANNER
router.put("/:id", async (req, res) => {
  try {
    const item = await Banner.findById(req.params.id);
    if (!!item) {
      try {
        const updatedItem = await Banner.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedItem);
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

// DELETE BANNER
router.delete("/:id", async (req, res) => {
  try {
    const item = await Banner.findById(req.params.id);

    if (!!item) {
      try {
        // await findByIdAndDelete(req.params.id);
        await item.delete();
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
