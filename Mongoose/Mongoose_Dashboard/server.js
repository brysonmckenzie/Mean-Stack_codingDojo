var express = require("express"),
  app = express(),
  path = require("path"),
  bodyParser = require("body-parser"),
  mongoose = require("mongoose");
  session = require("express-session");
  port = 8000;

var errors = [];

app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb://localhost/mongoose_dashboard");

app.use(express.static(path.join(__dirname, "./static")));

// app.use(session({ secret: "whatsthesecretkey" }));

app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs");

mongoose.Promise = global.Promise;

var LionSchema = new mongoose.Schema({
  lion: String,
  color: String
});

mongoose.model("Lion", LionSchema);
var Lion = mongoose.model("Lion");

//ROUTES

// ROOT

app.get('/', function(req, res) {
  Lion.find({}, function(err, results) {
    if (err) {
      console.log(err);
    };
    res.render("index", { lions: results });
  });
});

// NEW

app.get("/lions/new", function(req, res) {
  res.render("new");
});

//EDIT

app.get("/lions/edit/:id", function(req, res) {
  Lion.find({ _id: req.params.id }, function(err, response) {
    if (err) {
      console.log(err);
    }
    res.render("edit", { lion: response[0] });
  });
});

//SHOW

app.get("/lions/:id", function(req, res) {
  Lion.find({ _id: req.params.id }, function(err, response) {
    if (err) {
      console.log(err);
    }
    res.render("show", { lion: response[0] });
  });
});

//  *******POST ROUTES*******

// DELETE

app.post("/lions/:id/delete", function(req, res) {
  Lion.remove({ _id: req.params.id }, function(err, result) {
    if (err) {
      console.log(err);
    }
    res.redirect("/");
  });
});

//CREATE  //POST Attributed to GET new

app.post("/lions", function(req, res) {
  Lion.create(req.body, function(err, result) {
    if (err) {
      console.log(err);
    }
    res.redirect("/");
  });
});

// UPDATE

app.post("lions/:id", function(req, res) {
  Lion.update({ _id: req.params.id }, req.body, function(err, result) {
    if (err) {
      console.log(err);
    }
    res.redirect("/");
  });
});

app.listen(port, function() {
  console.log("PORT", port, "is up");
});
