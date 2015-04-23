
var http = require('http');
// load modules
var express = require('express');
var bodyParser = require('body-parser');

// init
var app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.set('port',process.env.PORT || 80);

// route
var route = require('./routes/routes.js')(app);

app.use(function(err,req,res,next){
	console.error(err.stack);
	res.type('text/plain');
	res.status(500);
	res.send('500 - Server error.');
});
app.use(function(req,res){
	res.type('text/plain');
	res.status(404);
	res.send('404 - Not found.');
});

// query db to verify user
//login.verify('Jack','jacky');

app.listen(app.get('port'), function(){
	console.log( 'Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});
