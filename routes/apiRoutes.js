// API routes

let restaurant = require('../data/restaurant.js')

module.exports = function (app) {

  // app.get('/getreservations', (req, res) => {
  //   res.json(restaurant.getReservationList())
  //   console.log(restaurant.getReservationList())
  // })

  // app.get('/getwaitinglist', (req, res) => {
  //   res.json(restaurant.getWaitList())
  //   console.log(restaurant.getWaitList())
  // })

  app.post('/setreservation', (req, res) => {
    restaurant.createReservation(req.body)
    res.sendStatus(200)
  })

}