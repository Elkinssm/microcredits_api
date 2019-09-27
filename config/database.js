let mongoose = require("mongoose");
const {
    DB_CONNECTION
} = require("../config/config")



module.exports = {
    //variable to indicated the connecion status
    connection: false,

    //function to do connect
    connect: () => {
        //If connection is active, return the connection
        if (this.connection) return this.connection

        //Connect to bd
        mongoose.connect(DB_CONNECTION)
            .then((connection) => {
                console.log("CONECTION");
            })
            .catch((error) => {
                console.log("ERROR:", error);
            })
    },

    //Disconecct database connection
    disconnect: () => {

        mongoose.connection.close()
            .then(() => {
                console.log("DISCONNECTION");

            })
    }
}