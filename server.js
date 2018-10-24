// modules
const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const app = express()

// express middelware: defines static file directory
app.use(express.static(path.join(__dirname, 'app/public')))
// express middleware: capable to handle complex json
app.use(bodyParser.urlencoded({extended: true}))
// express middleware: capable to handle simple json
app.use(bodyParser.json())

// add libraries here


// Start listening - use 3000 if available or next available port
const PORT = process.env.PORT || 3001;
app.listen(PORT, function () {
  console.log(`Listening at http://localhost:${PORT}`)
})