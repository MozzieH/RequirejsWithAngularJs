var express = require('express'),
  bodyParser = require('body-parser'),
  app = express();

app.use(bodyParser.json());

app.use('/bower_components', express.static(__dirname + '/../bower_components'));
app.use('/app', express.static(__dirname + '/../app'));

app.use(function(req, res) {
  res.status(404).send('Page not Found');
});
var server = app.listen(process.env.PORT || 1337, function() {
  console.log('Application listening at http://localhost:1337');
});