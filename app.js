const express = require('express');
const app = express();
const morgan = require('morgan');

app.listen(3000, function(){
  console.log('server listening')
})


//middleware logging
app.use('/', function(req, res, next){
 console.log(req.method + ' ' + req.url + ' ' + res.statusCode);
 next();
});

app.use(['/special', '/extra-special'], function(req, res, next){
 console.log('special area!');
});

app.use('/', morgan())
