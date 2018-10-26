
// Navigation routes

let restaurant = require('../data/restaurant.js')

module.exports = function (app) {

    app.get("/", (req,res) => {
        res.render("index")
    })
    
    app.get("/reservations", (req,res) => {
        res.render("components/reservations")
    })

    app.get("/tables", (req,res) => {
        res.render("components/tables", { restObj : restaurant})
    })

}