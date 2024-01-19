const productRouter = require('express').Router();
const {AllProduct,AddProduct,UpdateProduct,DeleteProduct,Productbycaetg,search,Note} = require('../controllers/product.controllers');



productRouter.get('/products',AllProduct)
productRouter.get('/prodbycateg/:categoryId',Productbycaetg)
productRouter.get('/searchprod',search)
productRouter.post('/product',AddProduct)
productRouter.put('/product/:id',UpdateProduct)
productRouter.delete('/product/:id',DeleteProduct)
productRouter.put('/note/:id',Note)


module.exports=productRouter;