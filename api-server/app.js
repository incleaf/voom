var express = require('express');
var cors = require('cors');
var app = express();
app.use(cors());

app.get('/player/:id', function(req, res) {
  res.json(require('./player'));
});

app.listen(3000, function() {
  console.log('API Server is running on port 3000');
});
