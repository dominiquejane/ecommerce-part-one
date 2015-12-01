var express = require('express'),
	bodyParser = require('body-parser'),
	mongojs = require('mongojs'),
	cors = require('cors'),
	port = 9001;

var app = express();
var db = mongojs('ecommerce', ['products']); //name of app, and name of a collection

app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname + '/public'));


app.get('/products', function (req, res) {
	db.products.find({}, function(err, results) {
		if (!err) {
			console.log(results);
			res.json(results);
		}
	})
});

app.get('/products/:id', function (req, res) {
	db.products.find({_id: mongojs.ObjectId(req.params.id)}, function(err, results) {
		if (!err) {
			console.log(results);
			res.json(results);
		}
	})
});

app.post('/products', function (req, res) {
	db.products.insert(req.body, function(err, results) {
		if (!err) {
			console.log(results);
			res.json(results);
		}
	})
});

app.put('/products/:id', function (req, res) {
	db.products.update({_id: mongojs.ObjectId(req.params.id)}, {$set: req.body}, function(err, results) {
		if (!err) {
			console.log(results);
			res.json(results);
		}
	})	
});

app.delete('/products/:id', function (req, res) {
	db.products.delete({_id: mongojs.ObjectId(req.params.id)}, function(err, results) {
		if (!err) {
			console.log(results);
			res.json(results);
		}
	})
});



app.listen(port, function() {
	console.log("Listening ", 9001);
});