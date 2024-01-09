const productRouter = require('express').Router();
const {AllProduct,AddProduct,UpdateProduct,DeleteProduct} = require('../controllers/product.controllers');



productRouter.get('/products',AllProduct)
productRouter.post('/product',AddProduct)
productRouter.put('/product/:id',UpdateProduct)
productRouter.delete('/product/:id',DeleteProduct)


module.exports=productRouter;