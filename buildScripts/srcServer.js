//configuring the file that will serve the file in the source dirrectory
import express from 'express'; //calling express
import path from 'path'; //reference to path
import open from 'open'; //will be used to open our file in the browser
import webpack from 'webpack';
import config from '../src/index.js';

const port = 3000; //port that will used 
const app = express(); //instance of express set to variable app
const compiler = webpack(config); //calling webpack and passing config referencing to webpack compiler

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath //configure public path
}));

app.get('/', function(req, res) { //routes express shouls handle: references to the root set to function that takes req and res
    res.sendFile(path.join(__dirname, '../src/index.html')); //calling res.sendFile and use path to join directory name that we are currently running in: joined together with the src dirrectory(../src/index.html)
});

app.listen(port, function(err) { //express to listen to port defined above and adding error handling
    if (err) {
        console.log(err)
    } else {
        open('http://localhost:' + port); //opening the application on the port
    }
}); //the do: "node buildScript/srcServer.js" to run the file