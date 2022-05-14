const dadosModel = require("../modelo/model")
const bcrypt = require("bcryptjs")
const { compareSync } = require("bcrypt")


module.exports = controles = {

    cadastro: async function (req, resp) {

        resp.render("index")
    },

    saveDados: async function (req, resp) {

        const dados = await new dadosModel({

            nome: req.body.nome,
            email: bcrypt.hashSync(req.body.email),
            senha: bcrypt.hashSync(req.body.senha),
            cep: bcrypt.hashSync(req.body.cep),
            endereco: bcrypt.hashSync(req.body.endereco),
            numero: bcrypt.hashSync(req.body.numero),
            bairro: bcrypt.hashSync(req.body.bairro),
            cidade: bcrypt.hashSync(req.body.cidade),
            estado: bcrypt.hashSync(req.body.estado),
        })
        resp.render("sucess")
        dados.save()
    },

    loginRender: function (req, resp) {

        resp.render("loginRender")
    },

    login: async function (req, resp) {

        const userExistInDataBase = await dadosModel.findOne({ nome: req.body.nome })

        try {

            const userExistInDataBaseSenha = await dadosModel.findOne({ senha: userExistInDataBase.senha })
            const compararSenha = await compareSync(req.body.senha, userExistInDataBaseSenha.senha)

            if (userExistInDataBase, compararSenha) {

                resp.send(`Bem vindo ${userExistInDataBase.nome}`)
            }
            else {
                resp.send("Senha ou usuário incorretos ")
             
            }
        }
        catch (erro) {
            console.log(erro)
        }
    }
}



// joão abc
// maria aaa