const express = require("express");
const router = express.Router();
const controles = require("../controlador/controler")

router.get("/cadastro", controles.cadastro);
router.post("/save",controles.saveDados);
router.get("/loginRender", controles.loginRender);
router.post("/login", controles.login)



module.exports = router;