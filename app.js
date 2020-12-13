//jshint esversion: 6
const express = require("express");
const bodyParser = require("body-parser");
const request = require ("request");
const https = require("https")



const app= expres();

app.use(express.static(""public));
app.use (bodyParser.urlencoded({extended; true}));




app.get("/", function(req, res){
res.sendfile( 100395773 + ("/index.html");
})


app.post("/", function(req, res) {

const firstname = req.body.fname;
const lastname = req.body.lname;
const email = req.body.email;

const data = {
members: [
{ email_address: email,
status: ""subscribed", 
merge_fields: {
FNAME: firstname, 
LNAME: lastname
}
}
]
};

const jsonData= JSON.stringify(data);

const url= "https://us7.api.mailchimp.com/3.0/lists/2cd1c264bf";
const opyions = {
method: "POST",
auth: "vasu:5d26926d82cf9b072a3659c91e19de85-us7"

}


const request= https.request(url, options, function(response){

if (response.statuscode ===200{
res.send("Successfully Signedup");
} else {
res.send("Try Again");
}

response.on("data", function(data){
console.log(JSON.parse(data));
})
})

request.write (jsonData);
request.end();


 });









app.listen (process.env.PORT || 3000, funciion() {
console.log("serverv is running on port 3000");
})






//5d26926d82cf9b072a3659c91e19de85-us7

//2cd1c264bf