var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var routes = require('./routes.js');

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 


app.use(express.static('./public'));
app.set('views', './public/views')
app.set('view engine', 'ejs');

app.get('/', routes.index);
app.post('/message', routes.message);

var server = app.listen(process.env.PORT || 3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

});
