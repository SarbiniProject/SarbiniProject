const usersRoute = require('express').Router();
const { user } = require('../config/config');
const {getAdmin,getonebyname,getlocation,generateToken,getAllcontrollers,deleteuser,updateuser,getlocation2,getOneById,updateadmin} = require('../controllers/admin.controller');



usersRoute.get('/admins',getAdmin)
usersRoute.get('/controllers',getAllcontrollers)
usersRoute.get('/byname',getonebyname)
usersRoute.get("/locations",getlocation)
usersRoute.get("/loc",getlocation2)
usersRoute.get('/:pseudo',getOneById)
usersRoute.put("/update/:id",updateuser)
usersRoute.put("/:id",updateadmin)
usersRoute.delete("/delete/:id",deleteuser)


module.exports=usersRoute;