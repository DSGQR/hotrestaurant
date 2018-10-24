const React = require('react');
const Fragment = React.Fragment
// const Form = require('./components/form')

const Page = () => {
  return (
    <Fragment>
      <html lang="en">
        <head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
          <title>Multiple message</title>
          <link href='https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css'
            rel='stylesheet'
            integrity='sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO'
            crossOrigin='anonymous' />
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
        </head>
        <body>
          <div className="container">

            <div className="jumbotron">
              <h1 className="text-center"><span className="fa fa-fire"></span> Hot Restaurant</h1>
              <hr/>
                <h2 className="text-center">We only have 5 tables! Book your seat before they all are gone!</h2>
                <br/>

                  <div className="text-center">
                    <a href="./components/res_view">
                      <button className="btn btn-lg btn-primary">
                        <span className="fa fa-list-alt"></span> View Tables
                      </button>
                    </a>
                    <a href="./components/reservation">
                      <button className="btn btn-lg btn-danger">
                        <span className="fa fa-credit-card"></span> Make Reservation
                      </button>
                    </a>
                  </div>

                </div>

                </div>
        <script src="./app.js"/>
        </body>
      </html>
    </Fragment>
        )
    }
    
module.exports = Page;