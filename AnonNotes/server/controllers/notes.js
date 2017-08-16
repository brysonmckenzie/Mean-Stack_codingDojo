var mongoose = require("mongoose");

var Note = mongoose.model("Note");
module.exports = {
//   create: function(req, res) {



//      }
//   },
  show: function(req, res) {
    Note.find({}, function(err,notes){
        if (err){
         console.log(err);
        }
        else{
            res.json(notes);
        }
    });
  }
};
