const React = require('react');
const Fragment = React.Fragment

const TableList = (props) => {
  return (
    <Fragment>
      <div className="card">
        <div className="card-header">
          <h4>Current Reservations</h4>
        </div>
        <div className="card-body">
          <ul id="tableList" className="list-group">
              {props.restaurant.reservationArr.map(res =>
                  <li key={res.name}>{"Name: " + res.name + ", phone: " + res.phone + ", email: " + res.email}</li>
              )}
          </ul>
        </div>
      </div>
    </Fragment>
  )
}

module.exports = TableList