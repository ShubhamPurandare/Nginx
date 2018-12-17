
var n =0;
var http = require('http');
http.createServer(function (req, res){ 
res.writeHead(200, {'Content-Type': 'text/plain'});
console.log("New requestt "+n);
n++;
res.end('Hello World for server 2\n');
}).listen(3000);
console.log('Server running at http://APP_SERVER_PUBLIC_IP_ADDRESS:4000/');
