const usersRoute = require('express').Router();
const {getAdmin} = require('../controllers/admin.controller');



usersRoute.get('/users',getAdmin)

module.exports=usersRoute;