// const STRING_CONNECTION = "mongodb://app:1234@localhost:27017/microcredits_db"
const STRING_CONNECTION = "mongodb+srv://admin:Admin123@clusterelkin-gv9hm.azure.mongodb.net/microcredits_db"


module.exports = {
    PORT: process.env.PORT || 3000,
    DB_CONNECTION: STRING_CONNECTION
}