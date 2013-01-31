var http = require('http'),
    fs = require('fs');

var server = http.createServer(function(req, res) {
  var path = 'index.html';

  if (req.url.match(/^\/media/)) {
    path = req.url;
  }

  // load file
  fs.readFile(__dirname + '/' + path, function(error, content) {
    if (error) {
      res.writeHead(500);
      res.end();
    } else {
      res.writeHead(500);
      res.end(content, 'utf-8');
    }
  });
});

server.listen(8000);
console.log('Oh Hiya');

var io = require('socket.io').listen(3000);

io.sockets.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
});


