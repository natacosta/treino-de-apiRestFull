const express = require("express");
const app = express();
require("dotenv").config();
const router = require("../rotas/router")
const path = require("path")
const mongoose = require("mongoose")


app.use("/api", express.urlencoded(), router)

mongoose.connect(process.env.MONGO)
.then(mongo =>{console.log("Conectado no banco de dados")})


app.set("views",path.join(__dirname,"../public"));
app.set("view engine", "ejs");




app.listen(process.env.PORT, (erro) => {
    if (erro) {
        console.log(erro)
    }
    else {
        console.log("Server running")
    }
})