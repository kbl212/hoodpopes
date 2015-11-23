////////////////
//DEPENDENCIES//
////////////////

var express = require('express');
var cors = require('cors');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

///////////////
//CONTROLLERS//
///////////////
var newsCtrl = require('./controllers/newsCtrl');
var attacksCtrl = require('./controllers/attacksCtrl');
var layoutsCtrl = require('./controllers/layoutsCtrl');



///////////
//EXPRESS//
///////////
var app = express();



//////////////
//MIDDLEWARE//
//////////////

app.use(bodyParser.json());
app.use(cors());
//app.use(express.static(__dirname + '/public));


//---------------------------------------SERVE UP STATIC FILES


/////////////
//ENDPOINTS//
/////////////

app.get('/api/attacks', attacksCtrl.getAttacks);

app.get('/api/layouts', layoutsCtrl.getLayouts);

app.post('/api/news', newsCtrl.createPost);
app.get('/api/news', newsCtrl.getPosts);


/*
app.post('/api/news', newsCtrl.create);

app.get('/api/attacks', attacksCtrl.read);   //----have front end send query for specific thLevel....  /api/attacks?th=7

app.get('/api/layouts', layoutsCtrl.read);  //----same as with attacks

*/










///////////////
//CONNECTIONS//
///////////////


//---------------------------------------CONNECT MONGOOSE TO mongoDB


var port = 3000;
app.listen(port, function() {
    
    console.log('listening on port ' + port);
    
});