const usersRoute = require('express').Router();
const { user } = require('../config/config');
const {getAdmin,getonebyname,getlocation,generateToken,getAllcontrollers,deleteuser,updateuser,getlocation2} = require('../controllers/admin.controller');



usersRoute.get('/admins',getAdmin)
usersRoute.get('/controllers',getAllcontrollers)
usersRoute.get('/byname',getonebyname)
usersRoute.get("/locations",getlocation)
usersRoute.get("/location",getlocation2)
usersRoute.put("/update/:id",updateuser)
usersRoute.delete("/delete/:id",deleteuser)

module.exports=usersRoute;