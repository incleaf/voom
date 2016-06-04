var express = require('express');
var app = express();

app.get('/user/:id', function(req, res) {
  res.json(require('./user'));
});

app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});
