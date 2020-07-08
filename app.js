// arquivo principal carregando modulos

const express = require("express")
const handlebars = require("express-handlebars")
const bodyParser = require("body-parser")
const app = express()
const admin = require("./routes/admin")
const path = require("path")
const mongoose = require("mongoose")
//configurações

//body-parser
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

//handlebars
app.engine("handlebars", handlebars({ defaultLayout: "main" }))
app.set("view engine", "handlebars")

//mongoose
mongoose.Promise = global.Promise
mongoose.connect("mongodb://localhost/blog").then(() => {
    console.log("Mongo Conectado!")
}).catch((err) => {
    console.log("Erro ao se conectar com o banco: "+err);
})

//public arquivos staticos
app.use(express.static(path.join(__dirname, "public")))

//rotas
app.use("/admin", admin)


//outros
const PORT = 8989
app.listen(PORT, () => {
    console.log("Server running!")
})