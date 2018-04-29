var path = require('path');
var morgan = require('morgan');
var express = require('express');

// function middleware(app) {
// 	app.use(morgan('dev'));

// 	app.use(express.static(__dirname + '/../../dist'));
// }

// module.exports = middleware;

module.exports = app => {
	app.use(morgan('dev'));

	app.use(express.static(__dirname + '/../../dist'));
};
