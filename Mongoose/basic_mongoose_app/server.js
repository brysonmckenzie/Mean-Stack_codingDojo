var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/basic_mongoose_app');

var UserSchema = new mongoose.Schema({
    name: String,
    age: Number
}, {timestamps: true});
mongoose.model('User', UserSchema);
var User = mongoose.model('User')

app.use(bodyParser.urlencoded({ extended: true }));

var path = require('path');

app.use(express.static(path.join(__dirname, './static')));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

// Routes

app.get('/', function(req, res) {
    User.find({}, function(err, users) {
    // This is the method that finds all of the users from the database
    // Notice how the first parameter is the options for what to find and the second is the
    //   callback function that has an error (if any) and all of the users
    // Keep in mind that everything you want to do AFTER you get the users from the database must
    //   happen inside of this callback for it to be synchronous 
    // Make sure you handle the case when there is an error, as well as the case when there is no error
    })
    res.render('index');
});



app.post('/users', function(req, res) {
    console.log("POST DATA", req.body);

    mongoose.Promise = global.Promise;
    
    var user = new User({name: req.body.name, age: req.body.age});
    user.save(function(err){
        if(err){
            console.log('something went wrong');
        }
        else{
            console.log('successfully added a user!')
            
            res.redirect('/');
        }
    })
});



//What's Up
app.listen(8000, function() {
    console.log("listening on port 8000");
});