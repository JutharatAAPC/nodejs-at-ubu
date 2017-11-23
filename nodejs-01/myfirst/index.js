 //How we require modules
var http = require('http');

http.createServer(function (req, res) {

    //Statue code in header
    res.writeHead(200, {'Content-Type': 'text/plain'});

    //Response body
    res.write('Hello World!,\nMy name is Jutharat Kleebmuang.\nmy nickname is  yui.\nStudent ID number is 5711407070.');

    //Close th econnection
    res.end();

}).listen(8080); //Listen for connections on this port
