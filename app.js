// app.js
// Basic setup for NodeJS server

// Calls for the packages needed
var express = require('express')          // Node Framework
    , bodyParser = require('body-parser') // Parse body of REST Requests
    , app = express()                     // Define app variable
    , port = process.env.PORT || 8082     // Define port the app will be using
    , http = require('http')		  // Require http server
    , path = require('path')              // Handling of file paths
    , ROUTES = require('./routes/routes') // Define routes path

// set the view engine to ejs
app.engine('.html', require('ejs').__express);
app.set('view engine', 'html');

/* Midlewares
================*/
app.use(bodyParser.urlencoded({ extended: true}));  // configure "app" to use bodyParser() to handle date from POST
app.use(bodyParser.json());  // define parse format - JSON
app.use(require('serve-static')(__dirname + '/public')); // Serve Static Files

/* ROUTES
================*/
for(var route in ROUTES) {
    app.get(ROUTES[route].path, ROUTES[route].fn);
}

/* Start Server
================*/

// Begin listening for HTTP requests to Express app
http.createServer(app).listen(port, function () {
     console.log("Listening on port: " + port);
});
