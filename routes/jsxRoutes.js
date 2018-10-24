var reserve = require("../data/tables")
var wait = require("../data/waitlist")

var restaurant = function (app) {

  app.get("/", (req, res) => {
    res.render("index")
  })

  app.get("/components/reservation", (req, res) => {
    res.render("components/reservation", {tables: reserve, waitlist: wait})
  })

  app.get("/components/res_view", (req, res) => {
    res.render("components/res_view")
  })

}

module.exports = restaurant;
