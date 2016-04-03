var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('FANS CLUB');
});

app.listen(process.env.PORT || 3000);
