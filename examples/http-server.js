var http = require('http');
var logentries = require('..');

var log = logentries.logger({
  token: 'YOUR_TOKEN'
})

log.on('error', function(err) {
  console.log('LOG ERROR: ', err);
})

http.createServer(function (req, res) {
  log.info(req.connection.remoteAddress + ', ' + req.method + ', ' + req.url);
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
})
.listen(1337, "127.0.0.1");

console.log('Server running at http://127.0.0.1:1337/');
