const usersRoute = require('express').Router();
const { user } = require('../config/config');
const {getAdmin,getonebyname,getlocation,generateToken,getAllcontrollers,deleteuser,updateuser} = require('../controllers/admin.controller');



usersRoute.get('/admins',getAdmin)
usersRoute.get('/controllers',getAllcontrollers)
usersRoute.get('/byname',getonebyname)
usersRoute.get("/locations",getlocation)
usersRoute.put("/update/:id",updateuser)
usersRoute.delete("/delete/:id",deleteuser)

module.exports=usersRoute;