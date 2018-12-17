var http = require('http');
http.createServer(function (req, res){ 
res.writeHead(200, {'Content-Type': 'text/plain'});
res.end('Hello World\n');
console.log("A client connected to server listening on port 4000  ");
}).listen(4000);
console.log('Server running at http://APP_SERVER_PUBLIC_IP_ADDRESS:4000/');
