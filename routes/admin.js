//rotas admin
const express = require("express")
const router = express.Router()
const mongoose = require("mongoose")
require("../models/Categoria")
const Categoria = mongoose.model("categorias")

router.get("/", (req, res) => {
    res.render("admin/index")
})

router.get("/posts", (req, res) => {
    res.send("Página de posts")
})

router.get("/categorias", (req, res) => {
    res.render("admin/categorias")
})

router.get("/categorias/add", (req, res) => {
    res.render("admin/addcategorias")
})

//validando formulario
var erros = []

if (!req.body.nome || typeof req.body.nome == undefined || req.body.nome == null) {
    erros.push({ text: "Nome inválido" })
}
if (!req.body.slug || typeof req.body.slug == undefined || req.body.slug == null) {
    erros.push({ text: "Slug inválido" })
}
if (req.body.length < 2) {
    erros.push({ text: "Nome da categoria é menor que o suportado!" })
}
if (erros.length > 0) {
    res.render("admin/addcategorias", { erros: erros })
}


router.post("/categorias/nova", (req, res) => {
    const novaCategoria = {
        nome: req.body.nome,
        slug: req.body.slug
    }

    new Categoria(novaCategoria).save().then(() => {
        console.log("Categoria salva com sucesso!")

    }).catch((err) => {
        console.log("Erro ao salvar categoria" + err);

    })

})




module.exports = router