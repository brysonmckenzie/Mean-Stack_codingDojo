var notes = require('../controllers/notes.js');
var path = require('path')

module.exports = function(app) {
    app.get('/api/show', function(req,res){notes.show(req, res)}
        );
    app.post('/api/process/add, (req, res, next) => notes.addThis(req, res, next));

        res.json(true)
    });
     

    // app.post('/register', function (req, res){
    //     notes.create(req, res);
    // });
    
    app.all('*', function(req,res){
        res.sendFile(path.resolve('./public/dist/index.html'))
    });
    };

    app.get('/notes', (req, res, next) => notes.getAll(req, res, next));
    app.post('/notes/add', (req, res, next) => notes.addThis(req, res, next));