var express = require('express');
var router = express.Router();

router.get('/skip', function(req, res) {
    var collection = req.app.locals.db.get('institutions');
    
    collection.find({},{limit: 8, skip: req.query.skip}, function(err, institutions){
        if (err) throw err;
        
      	res.json(institutions);
    });
});

router.get('/', function(req, res) {
    var collection = req.app.locals.db.get('institutions');
    
    collection.find({},{}, function(err, institutions){
        if (err) throw err;
        
      	res.json(institutions);
    });
});

router.get('/count', function(req, res) {
    var collection = req.app.locals.db.get('institutions');
    
    collection.count({}, function(err, institutions){
        if (err) throw err;    
        
      	res.json({"count": institutions});
    });
});



router.post('/', function(req, res){
    console.log('************** ' + req.body + ' *******************');
    var collection = req.app.locals.db.get('institutions');
    collection.insert(req.body, function(err, institution){
        if (err) throw err;

        res.json({count: institution});
    });
});


router.get('/:id', function(req, res) {
    var collection = req.app.locals.db.get('institutions');    
    collection.findOne({ _id: req.params.id }, function(err, institution){
        if (err) throw err;

      	res.json(institution);
    });
});



router.put('/:id', function(req, res){
    var collection = req.app.locals.db.get('institutions');
    
    collection.update(
        { _id: req.params.id },
        req.body, 
        function(err, institution){
            if (err) throw err;

            res.json(institution);
        });
});


router.delete('/:id', function(req, res){
    var collection = req.app.locals.db.get('institutions');
    collection.remove({ _id: req.params.id }, function(err, institution){
        if (err) throw err;

        res.json(institution);
    });
});


module.exports = router;