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
app.use(express.static(__dirname + '/public'));




/////////////
//ENDPOINTS//
/////////////

app.get('/api/attacks', attacksCtrl.getAttacks);
app.post('/api/attacks', attacksCtrl.createAttack);
//app.delete('/api/attacks', attacksCtrl.deleteAttack);
app.get('/api/layouts', layoutsCtrl.getLayouts);
app.post('/api/layouts', layoutsCtrl.createLayout);

app.post('/api/news', newsCtrl.createPost);
app.get('/api/news', newsCtrl.getPosts);




///////////////
//CONNECTIONS//
///////////////


//---------------------------------------CONNECT MONGOOSE TO mongoDB


var port = 3000;
app.listen(port, function() {
    
    console.log('listening on port ' + port);
    
});

var mongoUri = "mongodb://localhost:27017/hoodpopes";
mongoose.connect(mongoUri, function(err) {
    if (err) throw err;
});

mongoose.connection.once('open', function() {
    console.log('connected to mongoDB at: ', mongoUri);
});