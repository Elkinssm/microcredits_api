let mongoose = require("mongoose");
let User = require("../models/user.model");

let connectionString = "mongodb://app:1234@localhost:27017/microcredits_db";
mongoose.connect(connectionString);


const getAllUsers = (req, res) => {
    //Call to database
    res.send("Get all users")
};

const createUsers = (req, res) => {
    //Call to bd
    console.log('create', req.body);

    //Buscar si la cedula del usuario ya existe
    User.findOne({
            id: req.body.id
        })
        .then((response) => {
            console.log("user", response);
            //No se puede crear
        })

        .catch((error) => {
            console.log("error", error);

        });
    let newUser = new User(req.body);
    newUser.save()
        .then((response) => {
            console.log("response", response);
            //send response in HTML format
            // res.status(201).send("<h1>correcto</h1>");

            // send response in JSON format
            res.status(201).send({
                "mensaje": "Correcto",
                "status": 201

            })


        })
        .catch((error) => {
            console.log("*error", error.message);
            //send response in HTML format
            // res.status(404).send("<h1>error</h1>")

            // send response in JSON format
            res.status(404).send({
                "error": error.message,
                "status": 404

            })

        })


};


const deleteUsers = (req, res) => {
    //Delete user
    res.send("Delete user")
};

const updateUsers = (req, res) => {
    //Update user
    res.send("Create user")
};

module.exports = {
    getAllUsers,
    createUsers,
    deleteUsers,
    updateUsers
};