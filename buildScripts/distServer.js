//configuring the file that will serve the file in the source dirrectory
/*
import express from 'express'; //calling express
import path from 'path'; //reference to path
import open from 'open'; //will be used to open our file in the browser
import compression from 'compression';

/* eslint-disable no-console */
/*
const port = 3000; //port that will used 
const app = express(); //instance of express set to variable app

app.use(compression()); //compress
app.use(express.static('dist'));

app.get('/', function(req, res) { //routes express shouls handle: references to the root set to function that takes req and res
    res.sendFile(path.join(__dirname, '../dist/index.html')); //calling res.sendFile and use path to join directory name that we are currently running in: joined together with the src dirrectory(../src/index.html)
});

app.get('/users', function(req, res) {
    //Hard coding for simplicity, pretend this hits a real database
    res.json([
        { "id": 1, "firstName": "Bob", "lastName": "smith", "email": "bob@gmail.com" },
        { "id": 2, "firstName": "Tony", "lastName": "Norton", "email": "tnorton@yahoo.com" },
        { "id": 3, "firstName": "Lee", "lastName": "Tinah", "email": "lee.tinah@hotmail.com" }
    ]);
});

app.listen(port, function(err) { //express to listen to port defined above and adding error handling
    if (err) {
        console.log(err)
    } else {
        open('http://localhost:' + port); //opening the application on the port
    }
}); //the do: "node buildScript/srcServer.js" to run the file
*/

import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';

/*eslint-disable no-console */

const port = 3000;
const app = express();

app.use(express.static('dist'));
app.use(compression()); //Enalr gzip compression in express

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(port, function(err) {
    if (err) {
        console.log(err);
    } else {
        open(`http://localhost:${port}`);
    }
});