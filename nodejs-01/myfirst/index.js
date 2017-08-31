
var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('Hello World!');
    res.write('My name is Jutharat Kleebmuang.');
    res.write('my nickname is yui.');
    res.write('Student ID number is 5711407070.');
    res.end();
