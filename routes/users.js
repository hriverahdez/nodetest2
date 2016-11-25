var express = require('express');
var router = express.Router();
var crypto = require('crypto');


router.get('/', function(req, res) {
    var collection = req.app.locals.db.get('users');
    
    collection.find({},{}, function(err, users){
        if (err) throw err;
        
      	res.json(users);
    });
});