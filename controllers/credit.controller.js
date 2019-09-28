let mongoose = require("mongoose")
let DB = require("../config/database")
let Credit = require("../models/credit.model")

const getAllCredits = async (req, res) => {
    // Open DB
    DB.connect()




    await Credit.find().populate('usuario').exec()
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

const find = (req, res, next) => {
    DB.connect()
    Credit.findById(req.body._id)
        .then((response) => {
            if (response !== null) {
                return res.status(500).send({
                    "error": " credit already exists"
                })
            } else {
                next()
            }
        })
        .catch((error) => {
            res.send({
                "error": error.nessage
            })

            DB.disconnect()
        })
}


const createCredit = async (req, res) => {
    console.log("Credit has create");
    DB.connect()


    let newCredit = new Credit(req.body)

    await newCredit.save()
        .then((response) => {
            // send response in JSON format
            res.status(201).send({
                "mensaje": "credito creado correctamente",
                "status": 201
            })
        })
        .catch((error) => {
            // send response in JSON format
            res.status(404).send({
                "error": error.message,
                "status": 404
            })
        })
}

const deleteCredit = async (req, res) => {
    console.log("Credit has Delete");
    //Open DB
    DB.connect()

    //Get be user

    await Credit.findById(req.params._id)
        .then(async (creditFound) => {
            //Delete credit
            await creditFound.remove()
                .then((creditDeleted) => {
                    // The user has been deleted 
                    res.status(200.).send({
                        "message": "User deleted",
                        "credit": creditDeleted
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
                "error": "Credit not exits"
            })
            //Close DB
            DB.disconnect()
        })

    //  res.send({
    //     "_id": req.params._id
    // })
}



const updateCredit = async (req, res) => {
    console.log("Credit has update");
    // Open DB
    DB.connect()

    // Call to bd
    await Credit.findById(req.params._id)
        .then(async (creditFound) => {

            await creditFound.update(req.body)

                .then(() => {
                    res.send("Credit Updated")
                })
                .catch(() => {
                    res.send("NO")
                })

        })
        .catch(() => {
            res.send("error")
        })
    //Close DB
    DB.disconnect()

}

module.exports = {
    getAllCredits,
    find,
    createCredit,
    deleteCredit,
    updateCredit
}