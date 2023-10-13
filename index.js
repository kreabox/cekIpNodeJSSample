//use path module
const path = require('path');
const bodyParser = require('body-parser');
//use express module
const express = require('express');
//use hbs view engine
const hbs = require('hbs');

const app = express();

//set views file
app.set('views',path.join(__dirname,'views'));
//set view engine
app.set('view engine', 'hbs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//set folder public as static folder for static file
app.use('/assets',express.static(__dirname + '/public'));
var ip = require("ip");
//route for homepage
app.get('/',(req, res) => {
    res.render('page_view',{
      hostIp: ip.address()
    });
});

app.get("/ip", function(req, res) {
    console.log(req.socket.remoteAddress);
    console.log(req.ip);
    res.send("your IP is: " + req.ip);
  });
  
  //server listening
  app.listen(8000, () => {
    console.log('Server is running at port 8000');
    console.log('Your IP is')
});