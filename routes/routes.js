
var handler = require('./handler');
//var bodyParser = require('body-parser');
module.exports = function(app){
	app.get('/*.html',handler.serveHTML);
	app.get('/',handler.index);
	app.get('/css/*',handler.serveFile);
	app.get('/js/*',handler.serveFile);
	app.get('/img/*',handler.serveFile);
	app.get('/about',handler.about);
	//app.use(bodyParser.json()); // for parsing application/json
	//app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
	app.get('/search',handler.search);
	//app.get('/demo',handler.demo);
}