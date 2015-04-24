
var path = require('path');
//var mongoose = require('mongoose');

//var mongo_client = require('mongodb').MongoClient;
//var assert = require('assert');
//var url = 'mongodb://IbmCloud_mo7vhn6a_j8rdh483_uqurfpcg:hbYllSJ_kdM1-45CsFQAqAufp5iUjr0a@ds055110.mongolab.com:55110/IbmCloud_mo7vhn6a_j8rdh483?replicaSet=rs-ds055110'
//mongo_client.connect(url,function(err,db){
//	assert(null,err);
//	db.close();
//});

//mongoose.connect(url);
/*var kittySchema = mongoose.Schema({
										name: String,
										color: String
									})
var Kitten = mongoose.model('Kitten', kittySchema);
*/


module.exports.index = function(req,res){
	var file_path = path.join(__dirname,'..','public/index.html');
	res.sendFile(file_path);
}

module.exports.serveHTML = function(req,res){
	var file_path = path.join(__dirname,'..','public',req.path);
	res.sendFile(file_path);
}

module.exports.serveFile = function(req,res){
	var req_path = req.path;
	//console.log('req_path:'+req_path);
	var file_path = path.join(__dirname,'../public',req_path);
	//console.log('file_path'+file_path);
	res.sendFile(file_path);
};

/*
module.exports.search = function(req,res){
	//var username = req.body.username;
	//var password = req.body.password;
	//res.send(username+';'+password);
	//now query db to verigy user's information
	//login_service.verify(username,password);

	console.log('search');
	var name = req.body.name;
	console.log(name);
	mongoose.connect(url);
	var db = mongoose.connection;
	db.on('error', console.error.bind(console, 'connection error:'));
	db.once('open', function (callback) {
		Kitten.find({name:name},function(err,kittens){
			if (err) return console.error(err);
			res.send(kittens);
		});
	});
};


module.exports.demo = function(req,res){
	console.log('demo');
	var url = 'mongodb://IbmCloud_mo7vhn6a_j8rdh483_6qtgb9tm:8qUtCVjX1C3MUM8CxcvSzOZWsYUG9gjw@ds055110.mongolab.com:55110/IbmCloud_mo7vhn6a_j8rdh483?replicaSet=rs-ds055110'
	mongoose.connect(url);
	var db = mongoose.connection;
	db.on('error', console.error.bind(console, 'connection error:'));
	db.once('open', function (callback) {
		// yay!
		var kittySchema = mongoose.Schema({
										name: String,
										color: String
									})
		var Kitten = mongoose.model('Kitten', kittySchema)
		var silence = new Kitten({ name: 'Loud',color:'Black'})
		// NOTE: methods must be added to the schema before compiling it with mongoose.model()
		silence.save(function(err,silence){
			if (err) return console.error(err);
			res.send(silence);
		});
	});
}
*/

module.exports.about = function(req,res){
	res.send('About this app.');
};

