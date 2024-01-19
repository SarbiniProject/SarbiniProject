const ordersRouter = require('express').Router();
const { AllOrders,AddOrders,UpdateStatus1,UpdateStatus2,UpdateStatus3,AjoutProduct,Opnedtable,Getproduct,Orderon,Note,Deleteprod} = require('../controllers/orders.controller');



ordersRouter.get('/orders',AllOrders)
ordersRouter.get('/opned',Opnedtable)
ordersRouter.get('/orders/products',Getproduct)
ordersRouter.get('/orderon',Orderon)
ordersRouter.post('/orders',AddOrders)
ordersRouter.put('/orders/:id',UpdateStatus1)
ordersRouter.put('/orders/:id',UpdateStatus2)
ordersRouter.put('/orders/:id',UpdateStatus3)
ordersRouter.put('/addprod/:id',AjoutProduct)
ordersRouter.put('/deleteprod/:id',Deleteprod)



module.exports=ordersRouter