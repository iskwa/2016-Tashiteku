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

var io = require('socket.io').listen(server);

io.sockets.on("connection", function (socket) {
  console.log("connection");

  socket.on("connected", function (name) {
    console.log("connected");
  });

  // function for the event of receiving message
  socket.on("publish", function (data) {
    console.log( data.value );
    // io.sockets.emit('messeage', { value: data.value }
  });

  socket.on("disconnect", function(){
      console.log("disconnect");
  });
});

server.listen(8080);
console.log('server listening...');

