const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const app = express()


app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

// express middelware: defines static file directory
app.use(express.static(path.join(__dirname, 'public')))
// express middleware: capable to handle complex json
app.use(bodyParser.urlencoded({extended: true}))
// express middleware: capable to handle simple json
app.use(bodyParser.json())

// add libraries here

require("./routes/jsxRoutes")(app)
// Start listening - use 3000 if available or next available port
const PORT = process.env.PORT || 3001;
app.listen(PORT, function () {
  console.log(`Listening at http://localhost:${PORT}`)
})