var http = require('http');
var fs = require('fs');
var server = http.createServer();
server.on('requrest', function(req, res) {
    fs.readFile('myhtml.html', 'utf-8', function(err, data) {
        if (err) {
            res.writeHead(404, {'Content-Type': 'text/plain'});
            res.write('not found!');
            return res.end();
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    });
});
server.listen(8080);
console.log('server listening ...');
