const stripe = require("stripe")("sk_test_51NfOUIFIt3rgcksJutoHaqNUNd0wQ0DunI8w4CSAghERgZAfMzUPuo9Z4ml9wIktET2KfMWs2L5kFryqrcAFjG4u00a6x9lJsz");
const { orders } = require('../database-Sequelize/index');



module.exports = {
  intent: async (req, res) => {
    try {
      const paymentIntent = await stripe.paymentIntents.create({
        amount: req.body.amount,
        currency: "EUR",
        payment_method_types: ["card"],
      });

      res.json({ clientSecret: paymentIntent.client_secret });
    } catch (e) {
      res.status(400).json({
        error: e.message,
      });
    }
  },
  success: async (req, res) => {
    try {
      const userId = req.params.userId;
      await orders.update({ satus3: true }, {
        where: { id: userId }
      });

      res.status(200).json({ message: "Payment successful" });
    } catch (e) {
      res.status(400).json({
        error: e.message,
      });
    }
  },
};