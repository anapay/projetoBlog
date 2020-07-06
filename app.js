// arquivo principal carregando modulos

const express = require("express")
const handlebars = require("express-handlebars")
const bodyParser = require("body-parser")
//const mongoose = require("mongoose")
const app = express()
const admin = require("./routes/admin")
const path = require("path")
//configurações
//body-parser
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
//handlebars
app.engine("handlebars", handlebars({ defaultLayout: "main" }))
app.set("view engine", "handlebars")
//public arquivos staticos
app.use(express.static(path.join(__dirname, "public")))

//rotas
app.use("/admin",admin)


//outros
const PORT = 8989
app.listen(PORT, () => {
    console.log("Server running!")
})