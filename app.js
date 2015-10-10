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

/* Midlewares
================*/
// configure "app" to use bodyParser() to handle date from POST
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());			   // define parse format - JSON

/* ROUTES
================*/
for(var route in ROUTES) {
    app.get(ROUTES[route].path, ROUTES[route].fn);
}

/* POSTs
================*/
require('./posts/posts')(app);

/* Start Server
================*/

// Begin listening for HTTP requests to Express app
http.createServer(app).listen(app.get('port'), function () {
     console.log("Listening on port: " + app.get('port'));
});
