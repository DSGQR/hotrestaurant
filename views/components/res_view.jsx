const React = require('react');
const Fragment = React.Fragment

const ResList = () => {
    return(
        <Fragment>
        <html lang="en">
        <head>
            <meta charSet="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
            <title>Multiple message</title>
            <link href='https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css' 
                  rel='stylesheet' 
                  integrity='sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO' 
                  crossOrigin='anonymous' />
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
   
        </head>
        <body>
        <div className="container">
​
  <div className="jumbotron">
   <h1 className="text-center"><span className="fa fa-fire"></span> Hot Restaurant</h1>
   <hr/>
   <h2 className="text-center">Current Reservations and Waiting List</h2>
   <br/>
​
   <div className="text-center">
    <a href="/reserve">
     <button className="btn btn-lg btn-danger">
      <span className="fa fa-credit-card"></span> Make Reservation
     </button>
    </a>
    <a href="/">
     <button className="btn btn-lg btn-default">
      <span className="fa fa-home"></span>
     </button>
    </a>
   </div>
  </div>
​
  <div className="row">
   <div className="col-lg-12">
​
    
    <div className="card">
     <div className="card-header">
      <h4>Current Reservations</h4>
     </div>
     <div className="card-body">
      <ul id="tableList" className="list-group"></ul>
     </div>
    </div>
​
    
    <div className="card mt-4">
     <div className="card-header">
      <h4>Waiting List</h4>
     </div>
     <div className="card-body">
      <ul id="waitList" className="list-group"></ul>
     </div>
    </div>
   </div>
  </div>
​
 </div>
            <script src="https://code.jquery.com/jquery.js"></script>
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
            <script src='./app.js' />
        </body>
        </html>
        </Fragment>    
    )
}

module.exports = ResList;