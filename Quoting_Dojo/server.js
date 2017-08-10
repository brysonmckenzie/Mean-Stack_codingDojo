var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var port = 8000;

app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb://localhost/quote_app");

var QuoteSchema = new mongoose.Schema(
  {
    name: String,
    quote: String
  },
  { timestamps: true }
);

var Quote = mongoose.model("quotes", QuoteSchema);

var path = require("path");

app.use(express.static(path.join(__dirname, "./client")));

app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs");

// Routes

app.get("/", function(req, res) {
  res.render("index");
});

app.get("/quotes", function(req, res) {
  Quote.find({}, function(err, results) {
    if (err) {
      console.log(err);
    }
    res.render("results", { quotes: results });
  });
});

app.post("/quotes", function(req, res) {
  mongoose.Promise = global.Promise;
  Quote.create(req.body, function(err, results){
    if (err){
      console.log(err);
      res.redirect("/");
    }
  });
});
//What's Up
app.listen(port);
