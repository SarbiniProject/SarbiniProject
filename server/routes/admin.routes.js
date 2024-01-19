const usersRoute = require('express').Router();
const { user } = require('../config/config');
const {getAdmin,getonebyname,getlocation,generateToken,getAllcontrollers,deleteuser,updateuser,getlocation2,getOneByPseudo} = require('../controllers/admin.controller');



usersRoute.get('/admins',getAdmin)
usersRoute.get('/controllers',getAllcontrollers)
usersRoute.get('/byname',getonebyname)
usersRoute.get("/locations",getlocation)
usersRoute.get("/loc",getlocation2)
usersRoute.get('/:pseudo',getOneByPseudo)
usersRoute.put("/update/:id",updateuser)
usersRoute.delete("/delete/:id",deleteuser)


module.exports=usersRoute;