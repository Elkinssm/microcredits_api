let express = require("express");
let bodyParser = require("body-parser"); // Gestionar info en JSON
let userRouter = require("./routes/user.router"); //Archivo con config de rutas
let mongoDb = require("mongoose"); // Interactuar con MongoDB
let creditRouter = require("./routes/credit.router"); // Archicon con config de rutas en bd credits
const cookieParser = require("cookie-parser");
const cookieSession = require("cookie-session");
const cors = require("cors");

let app = express();

//Use cors 
app.use(cors());
//Receive information in JSON format
app.use(bodyParser.json());

//Active use cookies
app.use(cookieParser());

//Activate use of cookie sessions
app.use(
  cookieSession({
    secret: "aleatorio"
  })
);

//Config main route to server
app.get("/", (req, res) => {
  res.send("Respuesta desde / (raiz)");
});

//Config route for /api/users
app.use("/api/users", userRouter);
app.use("/api/credits", creditRouter);

module.exports = app;
