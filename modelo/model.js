const mongoose = require("mongoose")


const dadosSquema = new mongoose.Schema({

    nome: String,
    email:String,
    senha:String,
    cep:String,
    endereco:String,
    numero:String,
    bairro:String,
    cidade:String,
    estado:String,
})

module.exports = dadosModel =  mongoose.model("Pessoas",dadosSquema)