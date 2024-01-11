const usersRoute = require('express').Router();
const {AllSubs,AddSubs,UpdateSubs} = require('../controllers/subscriptions.controller');



usersRoute.get('/subs',AllSubs)
usersRoute.post('/subs',AddSubs)
usersRoute.put('/subs/:id',UpdateSubs)



module.exports=usersRoute;