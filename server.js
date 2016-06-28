var http = require('http');
var fs = require('fs');
var server = http.createServer();
server.on('request', function (req, res) {
  fs.readFile('./javascript/makePostit/test.html', 'utf-8', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });
});
server.listen(8080);
console.log('server listening...');

