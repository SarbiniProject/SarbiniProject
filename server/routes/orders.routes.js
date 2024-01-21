const ordersRouter = require('express').Router();
const { AllOrders,AddOrders,UpdateStatus1,UpdateStatus2,UpdateStatus3,OrdersByUserId } = require('../controllers/orders.controller');



ordersRouter.get('/orders',AllOrders)
ordersRouter.get('/orders/:userId',OrdersByUserId);
ordersRouter.post('/orders',AddOrders)
ordersRouter.put('/orders/:id',UpdateStatus1)
ordersRouter.put('/orders2/:id',UpdateStatus2)
ordersRouter.put('/orders3/:id',UpdateStatus3)
 




module.exports=ordersRouter