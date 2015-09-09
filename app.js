var express = require('express');
var app = express();
console.log('init');

app.get('/', function (req, res) {
  res.send('Hello GE Software!');
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});

console.log('end');
