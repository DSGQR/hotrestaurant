const reserve = require("../data/tables.js")
const wait = require("../data/waitlist.js")

var restaurant = function(app) {
    app.get("/", (req,res) => {
        res.render("index")
    })

    app.get("/res_view", (req,res) => {
        res.render("/components/res_view")
    })

    app.get("/reservation", (req,res) => {
        res.render("/components/reservation")
    })
}

module.exports = restaurant
