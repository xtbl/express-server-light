var express = require('express');
	path = require('path');
	
var	filesPath = '../gap_core/frontend/trunk/build';

var app = express();
app.use(express.bodyParser());
app.use(express.static(path.join(__dirname, filesPath)));

app.listen(3000);
console.log('Listening on port 3000...');