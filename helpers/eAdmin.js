
module.exports = {
    eAdmin: function (req, res, next) {
        if (req.isAuthenticated() && req.user.eAdmin == 1) {
            return next()
        }

        req.flash("error_msg", "Para entrar você precisa ser Admin!")
        res.redirect("/")
    }
}
