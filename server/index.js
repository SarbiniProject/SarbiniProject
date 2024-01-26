const express = require("express");
const usersRoute =require('./routes/users.routes')
const ordersRouter =require('./routes/orders.routes')
const adminRouter =require("./routes/admin.routes")
const productRouter =require('./routes/product.routes')
const categoryRoute =require('./routes/category.route')
const authController =require('./controllers/auth.controller')
const PaymentController =require('./routes/payment.routes')
const Stripe = require('stripe')
const stripe = Stripe(process.env.STRIPE_SECRET_KEY)

const cors = require('cors')

const db = require('./database-Sequelize');
const app = express();
const PORT = process.env.PORT || 3000


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../client/dist"));
app.use(cors())
app.post('/api/sarbini/signup',authController.signUp)
app.post('/api/sarbini/signin',authController.signIn)
app.post('/api/sarbini/adminSignIn',authController.adminSignIn)
app.use("/api/sarbini",usersRoute)
app.use("/api/sarbini",ordersRouter)
app.use("/api/sarbini/admin",adminRouter)
app.use("/api/sarbini",productRouter)
app.use("/api/sarbini",categoryRoute)
app.use("/api/sarbini",PaymentController)




app.listen(PORT, function () {
  console.log("listening on port 3000!");
});
