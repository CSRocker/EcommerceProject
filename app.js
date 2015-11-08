// app.js
// Basic setup for NodeJS server

// Calls for the packages needed
var express = require('express')          // Node Framework
    , bodyParser = require('body-parser') // Parse body of REST Requests
    , app = express()                     // Define app variable
    , port = process.env.PORT || 8082     // Define port the app will be using
    , http = require('http')		      // Require http server
    , path = require('path')              // Handling of file paths
    , routes = require('./controllers/routes') // Define routes path
    , db = require('./models')            // Set Path to the database model directory and definition
    , async = require('async')            // Perform Asynchronous functions
    , passport = require('passport');     // Library to authenticate users

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
for(var route in routes) {
    app.get(routes[route].path, routes[route].fn);
}

/* POSTS
 ================*/
require('./controllers/posts')(app, global.db, passport);

/* Start Server
================*/

// Begin listening for HTTP requests to Express app
global.db.sequelize.sync().then(function(err) {
    var DB_REFRESH_INTERVAL_SECONDS = 3600*1000;  // every 1 hr
    async.parallel([
        function () {
            // Begin listening for HTTP requests to Express app
            http.createServer(app).listen(port, function () {
                console.log("Listening on " + port);
            });
        },
        function () {
            // verify currency conversion rates before starting the server
            global.db.Rate.getRates();

            // verify currency conversion rates every 1 hr
            setInterval(function () {
                global.db.Rate.getRates();
            }, DB_REFRESH_INTERVAL_SECONDS);
        },
    ]);
});
