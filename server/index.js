var express = require('express');
var app = express();
// var middleware = require('./middleware');
// var routes = require('./routes');

// run middleware
require('./middleware')(app);

// app.get('/index.html', (req, res) => {
// 	res.sendFile(path.join(__dirname, '../dist', 'index.html'));
// });

// app.get('/students', (req, res) => {
// 	res.json({ one: 'hello world' });
// });

//run routes

//routes(app);

require('./routes')(app);

// run the webserver
app.listen(3000, () => {
	console.log('listening on port 3000');
});
