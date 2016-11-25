var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    var collection = req.app.locals.db.get('dmz');
    
    collection.find({},{}, function(err, dmz){
        if (err) throw err;
        
      	res.json(dmz);
    });
});

/*router.get('/count', function(req, res) {
    var collection = req.app.locals.db.get('institutions');
    
    collection.count({}, function(err, institutions){
        if (err) throw err;    
        
      	res.json({"count": institutions});
    });
});*/


router.post('/', function(req, res){
    var collection = req.app.locals.db.get('dmz');
    collection.insert(req.body, function(err, dmz){
        if (err) throw err;

        res.json({count: dmz});
    });
});


router.get('/:id', function(req, res) {
    var collection = req.app.locals.db.get('dmz');    
    collection.findOne({ _id: req.params.id }, function(err, dmz){
        if (err) throw err;

      	res.json(dmz);
    });
});



router.put('/:id', function(req, res){
    var collection = req.app.locals.db.get('dmz');
    
    collection.update(
        { _id: req.params.id },
        req.body, 
        function(err, dmz){
            if (err) throw err;

            res.json(dmz);
        });
});


router.delete('/:id', function(req, res){
    var collection = req.app.locals.db.get('dmz');
    collection.remove({ _id: req.params.id }, function(err, dmz){
        if (err) throw err;

        res.json(dmz);
    });
});


module.exports = router;