var express=require('express');
var app=express();

var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(8000);
console.log('server started on port: 8000');

// gzip
var compression=require('compression');
app.use(compression());

// Static Resource
app.use(express.static(__dirname+'/',{maxAge:1000*60*60*24}));

var os=require('os'),
    iptable={},
    ifaces=os.networkInterfaces();
for (var dev in ifaces) {
  ifaces[dev].forEach(function(details,alias){
    if (details.family=='IPv4') {
      iptable[dev+(alias?':'+alias:'')]=details.address;
    }
  });
}
console.log(iptable);

var serverIp=iptable['en0:1']+':8000';

// websocket
io.on('connection', function (socket){

  socket.on('myPhoneTouchstart', function (data){
    socket.broadcast.emit("myGameTouchstart",data); 
  });

  socket.on('myPhoneTouchmove', function (data){
    socket.broadcast.emit("myGameTouchmove",data); 
  });

  socket.on('myPhoneTouchend', function (data){
    socket.broadcast.emit("myGameTouchend",data); 
  });

  socket.on('myPhoneOrientationHandler', function (data){
    socket.broadcast.emit("myGameOrientationHandler",data); 
  });

  socket.on('gameScreen', function (data){
    socket.broadcast.emit("phoneScreen",data);
    socket.emit("gameScreen",{ip:serverIp});
  });
});


