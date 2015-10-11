// routes.js
// Calls for Libraries to be used
var u_s = require('underscore')  // Javascript Helper Library

/* Routes to follow
======================*/
var indexfn = function(req, res) {

    // Render index.html
    res.render("index");
};

var fibonacci_toNumberfn = function(req, res){
    var defaultFibonacciValue = 1000;  // Default Value up to fibonacci number 1000

    var value = 0, nextValue = 1, sum = 0;
    var counter = 3;  // counter starts at 3, since we are hard coding first 2 values in array
    var fibonacciArray = u_s.object(u_s.zip([1, 2], [0, 1]));

    //  will loop through the provided parameter or (if not avail) through default value
    while((value+nextValue) <= (req.params.toNumber || defaultFibonacciValue)){
        sum = value + nextValue;
        value = nextValue;
        nextValue = sum;

        // Add Fibonacci number to array
        fibonacciArray[counter] = sum;
        counter++;
    }
    res.send(fibonacciArray);
}

var ispalindromefn = function(req, res) {

    var word = req.params.word;
    var result = [];  // Array to store result of comparison

    // Remove "spaces" or special Characters
    word = word.toLowerCase().replace(/[^a-z]+/g,"");

    // compare word with inverse word
    if (word == word.split('').reverse().join(''))
        result = {"isPalindrome": true};
    else
        result = {"isPalindrome": false};

    res.send(result);
}

/* Map Routes
======================*/
var define_routes = function(dict) {
    var toroute = function(item) {
        return u_s.object(u_s.zip(['path', 'fn'], [item[0], item[1]]));
    };
    return u_s.map(u_s.pairs(dict), toroute);
};

/* Define Routes
 ======================*/
var ROUTES = define_routes({
    '/': indexfn,
    '/fibonacci': fibonacci_toNumberfn,
    '/fibonacci/:toNumber': fibonacci_toNumberfn,
    '/ispalindrome/:word': ispalindromefn
});

module.exports = ROUTES;