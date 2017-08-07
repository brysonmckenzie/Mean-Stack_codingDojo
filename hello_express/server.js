var express = require("express")

var app = express();

app.get('/', function(request, response){
    response.send("Hello King Kunta")
});

app.get("/users", function (request, response){
    // hard-coded user data
    var users_array = [
        {name: "Michael", email: "michael@codingdojo.com"}, 
        {name: "Jay", email: "jay@codingdojo.com"}, 
        {name: "Brendan", email: "brendan@codingdojo.com"}, 
        {name: "Andrew", email: "andrew@codingdojo.com"}
    ];
    response.render('users', {users: users_array});
})


app.use(express.static(__dirname + "/static"));
    console.log("********");
    console.log(__dirname);
    console.log("********");

app.set('views',__dirname + '/views');

app.set('view engine', 'ejs')



app.listen(8000, function(){
    console.log("listening on 8000")
});