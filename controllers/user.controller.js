let mongoose = require("mongoose")
let User = require("../models/user.model")
let DB = require("../config/database")



// Get all users
const getAllUsers = async (req, res) => {
    // Open DB
    DB.connect()

    await User.find()
        .then((response) => {

            res.status(200).send({
                results: response,
                status: 200

            })
        })
        .catch((res) => {
            res.send({
                "error": error
            })
            //Close DB
            DB.disconnect()
        })
}

// Create middleware
const find = (req, res, next) => {
    // Open DB
    DB.connect()

    //Buscar si la cedula del usuario ya existe 
    User.findOne({
            cedula: req.body.cedula
        })
        .then((response) => {
            console.log("user ", response)
            // If response is not nul, the user already exists
            if (response !== null) {
                return res.status(500).send({
                    "error": "User alredy exists"
                })
            }
            // Can be user
            else {
                next()
            }
        })
        .catch((error) => {
            res.send({
                "error": error.message,


            })
            //Close DB
            DB.disconnect()

        })
}


// Create an user
const createUser = async (req, res) => {

    // Create user when not exists
    let newUser = new User(req.body)
    await newUser.save()
        .then((response) => {
            // send response in JSON format
            res.status(201).send({
                "mensaje": "Usuario creado correctamente",
                "status": 201
            })
        })
        .catch((error) => {
            // send response in JSON format
            res.status(404).send({
                "error": error.message,
                "status": 404
            })
            //Close DB
            DB.disconnect()
        })
}

// Delete an user
const deleteUser = async (req, res) => {
    // Open DB
    DB.connect()

    //Get be user

    await User.findById(req.params._id)
        .then(async (userFound) => {
            //Delete user
            await userFound.remove()
                .then((userDeleted) => {
                    // The user has been deleted 
                    res.status(200.).send({
                        "message": "User deleted",
                        "user": userDeleted
                    })
                })
                .catch(() => {
                    res.send({
                        "error": error.message
                    })
                })

        })
        .catch((err) => {
            res.send({
                "error": "User not exits"
            })
            //Close DB
            DB.disconnect()
        })

    //  res.send({
    //     "_id": req.params._id
    // })
}

// Update an user
const updateUser = async (req, res) => {
    // Open DB
    DB.connect()

    // Call to bd
    await User.findById(req.params._id)
        .then(async (userFound) => {
            //Way 1
            //User.update(userFound, req.body)

            //Way2
            await userFound.update(req.body)

                //Way3

                .then(() => {
                    res.send("Updated")
                })
                .catch(() => {
                    res.send("NO")
                })
            // First proof
            // userFound.cedula = req.body.cedula
            // userFound.nombre = req.body.nombre
            // userFound.apellido = req.body.apellido
            // userFound.save()

            //Way own
            //let change = Object.assign(userFound, req.body)
            //userFound.save()
            //res.send(change)
        })
        .catch(() => {
            res.send("error")
        })
    //Close DB
    DB.disconnect()
};

module.exports = {
    getAllUsers,
    createUser,
    deleteUser,
    updateUser,
    find
}