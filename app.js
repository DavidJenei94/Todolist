const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");

const app = express();

var items = ["Buy food","Cook food", "Eat food"];

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){

    var today = new Date();
    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    }
    
    var day = today.toLocaleDateString("en-US", options);

    res.render("list", {kindOfDay: day, newListItems: items});

    console.log(today);
    console.log(day);

    //res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){
    var item = req.body.newItem;
    items.push(item);

    res.redirect("/");
});


app.listen(3000, function(){
    console.log("app listens on port 3000");    
});