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
console.log('Listening on port: 8000');


