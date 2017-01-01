var express = require('express')
var app = express()
var bodyParser = require('body-parser')

app.use(express.static('demo/dist'))

// 映射到首页
app.get('/', function (req, res) {
   res.sendFile( __dirname + "/" + "index.html" );
})

module.exports = app;