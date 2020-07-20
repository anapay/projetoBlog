

if (process.env.NODE_ENV == "production") {
    module.exports = { mongoURI: "mongodb+srv://blogApp:joao@cluster0.zi8dk.mongodb.net/mongodb?retryWrites=true&w=majority" }

} else {
    module.exports = { mongoURI: "mongodb://localhost/blog" }

}
