const usersRoute = require('express').Router();
const { AllUsers,UpdateUser,DeleteUser,finbypseudo,findbyid,AddUser } = require('../controllers/users.controller');



usersRoute.get('/users',AllUsers)
usersRoute.get('/pseudo/:user_pseudo',finbypseudo)
usersRoute.get('/users/:id',findbyid)
usersRoute.post('/user',AddUser)
usersRoute.put('/users/:id',UpdateUser)
usersRoute.delete('/users/:id',DeleteUser)


module.exports=usersRoute;