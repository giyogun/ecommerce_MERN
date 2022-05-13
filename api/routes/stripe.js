const router = require("express").Router();
require("dotenv").config();
const stripe = require("stripe")(process.env.NEXT_STRIPE_SECRET_KEY);


router.post("/", async (req, res) => {
  try {
    const params = {
      submit_type: "pay",
      mode: "payment",
      payment_method_types: ["card"],
      billing_address_collection: "auto",
      shipping_options: [
        { shipping_rate: "shr_1KwqeDGx5vjbOUrLPTxe3Cd9" },
        { shipping_rate: "shr_1KwqgQGx5vjbOUrLFmtDZxln" },
      ],
      line_items: req.body.body.map((item) => {
        const img = item.image[0];

        return {
          price_data: {
            currency: "usd",
            product_data: {
              name: item.name,
              images: [img],
            },
            unit_amount: Math.round(item.price * 100),
          },
          adjustable_quantity: {
            enabled: true,
            minimum: 1,
          },
          quantity: item.qty,
        };
      }),
      success_url: `${req.headers.origin}/success`,
      cancel_url: `${req.headers.origin}/canceled`,
    };
    // Create Checkout Sessions from body params.
    const session = await stripe.checkout.sessions.create(params);
    res.status(200).json(session);
  } catch (err) {
    res.status(err.statusCode || 500).json(err.message);
    console.log(err);
  }
});

module.exports = router;
