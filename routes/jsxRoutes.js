var reserve = require("../data/tables")
var wait = require("../data/waitlist")

var restaurant = function (app) {

  app.get("/", (req, res) => {
    res.render("index")
  })

  app.get("/reservation", (req, res) => {
    res.render("components/resrvation", {tables: reserve, waitlist: wait})
  })

  // app.get("/", (req, res) => {
  //   res.render("index")
  // })

}

module.exports = restaurant;
