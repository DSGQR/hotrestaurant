const React = require('react');
const Fragment = React.Fragment

const TableWaitList = (props) => {
  return (
    <Fragment>
      <div className="card mt-4">
        <div className="card-header">
          <h4>Waiting List</h4>
        </div>
        <div className="card-body">
          <ul id="waitList" className="list-group">
             {props.restaurant.waitingListArr.map(res =>
                  <li key={res.name}>{"Name: " + res.name + ", phone: " + res.phone + ", email: " + res.email}</li>
              )}
          </ul>
        </div>
      </div>
    </Fragment>
  )
}

module.exports = TableWaitList