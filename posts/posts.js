// posts.js

/* Handle POST request
==========================*/
module.exports = function(app) {

    console.log("At Start");

    // '/tweetStatus' - Post to Twitter - By Carlos Martinez
    app.post('/fibonacci/:toNumber', function (req, res) {

        console.log("At Fibonacii tonumber");
        var value = 0;
        var nextValue = 1;
        var sum = 0;
        var fiboArray = [0,1];

        while(sum <= req.params.toNumber){
            sum = value + nextValue;
            value = nextValue;
            nextValue = sum;

            fiboArray.push(sum);
        }
        res.send(fiboArray);
    });

    // '/tweetStatus' - Post to Twitter - By Carlos Martinez
    app.post('/fibonacci', function (req, res) {

        console.log("At Fibonacii tonumber");
        var value = 0;
        var nextValue = 1;
        var sum = 0;
        var fiboArray = [0,1];

        while(sum <= 100){
            sum = value + nextValue;
            value = nextValue;
            nextValue = sum;

            fiboArray.push(sum);
        }
        res.send(fiboArray);
    });

}