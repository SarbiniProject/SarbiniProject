const usersRoute = require('express').Router();
const { AllUsers,UpdateUser,DeleteUser,finbypseudo } = require('../controllers/users.controller');



usersRoute.get('/users',AllUsers)
usersRoute.put('/users/:id',UpdateUser)
usersRoute.delete('/users/:id',DeleteUser)
usersRoute.get('/pseudo/:user_pseudo',finbypseudo)


module.exports=usersRoute;