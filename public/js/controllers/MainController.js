app.controller('MainController', ['$scope', function ($scope) {
    $scope.apps =
        [
            {
                title: "GET 'fibonacci/'",
                description: 'Returns collection of Fibonacci Numbers up to number 1000',
                URL: 'http://ec2-52-88-237-253.us-west-2.compute.amazonaws.com:8082/fibonacc',
                response_format: 'JSON',
                parameters: 'NONE',
                example_req: 'http://ec2-52-88-237-253.us-west-2.compute.amazonaws.com:8082/fibonacci',
                example_res: '{"1":0,"2":1,"3":1,"4":2,"5":3,"6":5,"7":8}'
            },
            {
                title: "GET 'fibonacci/:toNumber'",
                description: "Returns collection of Fibonacci Numbers up to number specified in ':toNumber'",
                URL: 'http://ec2-52-88-237-253.us-west-2.compute.amazonaws.com:8082/fibonacci/:toNumber',
                response_format: 'JSON',
                parameters: 'toNumber',
                example_req: 'http://ec2-52-88-237-253.us-west-2.compute.amazonaws.com:8082/fibonacci/20',
                example_res: '{"1":0,"2":1,"3":1,"4":2,"5":3,"6":5,"7":8,"8":13}'
            },
            {
                title: "GET 'ispalindrome/:word'",
                description: "Verifies if a word is a Palindrome and returns 'true' or 'false' accordingly",
                URL: 'http://ec2-52-88-237-253.us-west-2.compute.amazonaws.com:8082/ispalindrome/:word',
                response_format: 'JSON',
                parameters: ':word',
                example_req: 'http://ec2-52-88-237-253.us-west-2.compute.amazonaws.com:8082/ispalindrome/Racecar',
                example_res: '{"isPalindrome":true}'
            }
        ]
}]);