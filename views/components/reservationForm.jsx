const React = require('react');
const Fragment = React.Fragment

const ReservationForm = () => {
  return (
    <Fragment>
      <div className="card">
        <div className="card-header">
          Table Reservation
                  </div>
        <div className="card-body">
          <form role="form">
            <div className="form-group">
              <label htmlFor="reserve-name">Name</label>
              <input type="text" className="form-control" id="reserve-name" />
            </div>
            <div className="form-group">
              <label htmlFor="reserve-phone">Phone Number</label>
              <input type="text" className="form-control" id="reserve-phone" />
            </div>
            <div className="form-group">
              <label htmlFor="reserve-email">Email</label>
              <input type="text" className="form-control" id="reserve-email" />
            </div>
            <button id="btnCreate" type="submit" className="btn btn-primary submit">Submit</button>
          </form>
        </div>
      </div>
    </Fragment>
  )
}

module.exports = ReservationForm