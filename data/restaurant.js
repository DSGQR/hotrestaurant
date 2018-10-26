const MAX_TABLES = 5;

// function to handle reservationns
module.exports = {
    reservationArr : [{
      name: "Adam", phone: "123-3456", email: "adma@aswome.com" },
    {
      name: "Joe", phone: "123-3456",  email: "joe@aswome.com"
    }],

    waitingListArr : [{
      name: "Susan", phone: "123-3456", email: "susan@aswome.com"
    },
    {
      name: "Martin", phone: "123-3456", email: "martin@aswome.com"
    }],

    getReservationList() {
      return this.reservationArr;
    },
    getWaitList() {
      return this.waitingListArr;
    },
    createReservation(reservation) {
      // if all tables reserved add to wait list 
      if (this.reservationArr.length === MAX_TABLES) {
        this.waitingListArr.push(reservation);
      } else {
        this.reservationArr.push(reservation);
      }
    }
  }