var express = require('express'),
    path = require('path');
    
   
   
    
var app = express();
app.use(express.bodyParser());
app.use(express.static(path.join(__dirname, 'phonegap/www')));



app.listen(4000);
console.log('Listening on port 4000...');
