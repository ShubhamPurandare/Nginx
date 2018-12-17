var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

io.on('connection', function(socket){
  console.log('a user connected');


	socket.on('login', function(data){

		console.log("data"+JSON.stringify(data));

	});
});

app.post('/' , function(request , response){

	console.log("Heyman");


})

http.listen(4000, function(){
  console.log('listening on *:4000');
});
