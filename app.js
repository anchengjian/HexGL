var express=require('express');
var app=express();

var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(8000);
console.log('server started on port: 8000');

//启用gzip
var compression=require('compression');
app.use(compression());

// 静态资源，彻底前后端分离
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

var serverIp=iptable['en0:1']+':8000';

// websocket
io.on('connection', function (socket){

  // 监听手机消息
  socket.on('myPhoneTouchstart', function (data){
    // 分发消息给游戏设备
    socket.broadcast.emit("myGameTouchstart",data); 
  });

  // 监听手机消息
  socket.on('myPhoneTouchmove', function (data){
    // 分发消息给游戏设备
    socket.broadcast.emit("myGameTouchmove",data); 
  });

  // 监听手机消息
  socket.on('myPhoneTouchend', function (data){
    // 分发消息给游戏设备
    socket.broadcast.emit("myGameTouchend",data); 
  });

  // 监听手机消息
  socket.on('myPhoneOrientationHandler', function (data){
    // 分发消息给游戏设备
    socket.broadcast.emit("myGameOrientationHandler",data); 
  });

  // 监听游戏消息
  socket.on('gameScreen', function (data){
    // 分发消息给游戏设备
    socket.broadcast.emit("phoneScreen",data);

    // 局域网默认开始发en0网桥的ip
    socket.emit("gameScreen",{ip:serverIp});
  });
});


