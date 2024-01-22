const ordersRouter = require('express').Router();
const { AllOrders,AddOrders,UpdateStatus1,UpdateStatus2,AjoutProduct,Opnedtable,Getproduct,Orderon,Note,Deleteprod,UpdateStatus3,OrdersByUserId,GetOrderById} = require('../controllers/orders.controller');


ordersRouter.get('/orders',AllOrders)
ordersRouter.get('/opned',Opnedtable)
ordersRouter.get('/orders/products',Getproduct)
ordersRouter.get('/orderon',Orderon)
ordersRouter.get('/orders/:userId',OrdersByUserId);
ordersRouter.post('/orders',AddOrders)
ordersRouter.put('/orders/:id',UpdateStatus1)
ordersRouter.put('/orders2/:id',UpdateStatus2)
ordersRouter.put('/addprod/:id',AjoutProduct)
ordersRouter.put('/deleteprod/:id',Deleteprod)
ordersRouter.put('/addnote/:id',Note)

ordersRouter.put('/orders3/:id',UpdateStatus3)
ordersRouter.get('/ordersOne/:id', GetOrderById);


module.exports=ordersRouter