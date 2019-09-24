let express = require('express');
let userCtr = require('../controllers/user.controller')

let userRouter = express.Router();

userRouter
    //Get all users
    .get('/', userCtr.getAllUsers)
    //Create an user
    .post('/create', userCtr.createUsers)
    //Drop an user
    .delete('/delete', userCtr.deleteUsers)
    //Update the user
    .put('/update', userCtr.updateUsers);




module.exports = userRouter;