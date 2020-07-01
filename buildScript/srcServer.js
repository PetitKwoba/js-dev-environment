//configuring the file that will serve the file in the source dirrectory
var express = require('express'); //calling express
var  path = require('path'); //reference to path
var open = require('open'); //will be used to open our file in the browser

var port = 3000; //port that will used
var app = express(); //instance of express set to variable app

app.get('/', function(req, res){  //routes express shouls handle: references to the root set to function that takes req and res
  res.sendFile(path.join(_dirname, '../src/index.html'));//calling res.sendFile and use path to join directory name that we are currently running in: joined together with the src dirrectory(../src/index.html)
});

app.listen(port, function(err) { //express to listen to port defined above and adding error handling
  if (err) {
    console.log(err)
  } else {
    open('http://localhost:' + port);
  }
}) //the do: "node buildScript/srcServer.js" to run the file
