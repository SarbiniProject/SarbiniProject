const usersRoute = require('express').Router();
const {getAdmin,generateToken, getAllcontrollers} = require('../controllers/admin.controller');



usersRoute.get('/admins',getAdmin)
usersRoute.get('/controllers',getAllcontrollers)

module.exports=usersRoute;