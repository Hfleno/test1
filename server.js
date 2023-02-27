const express = require('express')
//const cors = require('cors')
const serveStatic = require('serve-static')
//var mongoose = require('mongoose')
//var chalk = require('chalk')

//require('dotenv').config()

const app = express()
//app.use(cors())
app.use(express.static('dist'))
app.use(serveStatic(__dirname + '/dist'))
var port = process.env.PORT || 3000
app.listen(port, function() {
  console.log('Server listening on port ' + port)
})
//npm i express body-parser cors serve-static mongoose dotenv chalk