const productRouter = require('express').Router();
const {AllProduct,AddProduct,UpdateProduct,DeleteProduct,Productbycaetg,search} = require('../controllers/product.controllers');



productRouter.get('/products',AllProduct)
productRouter.get('/prodbycateg/:categoryId',Productbycaetg)
productRouter.get('/searchprod/:product_name',search)
productRouter.post('/product',AddProduct)
productRouter.put('/product/:id',UpdateProduct)
productRouter.delete('/product/:id',DeleteProduct)


module.exports=productRouter;