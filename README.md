
这个是我修改过的游戏，原因是在27寸的大屏幕上玩的时候，必须要按着键盘，感觉太累。。。

然后我想到了可以用socket这种方式来传递移动端的陀螺仪到桌面端，从而来控制游戏。这体验不就上来了么，突然想起童年的冒险岛魂斗罗啊。233暴露年龄啊

采用熟悉的nodejs环境,用了socket.io来传递移动设备和桌面设备的触摸和陀螺仪事件。

## Installation

    cd ~/
    git clone https://github.com/anchengjian/HexGL.git
    cd HexGL
    npm install
    node app.js
    chromium index.html

然后掏出手机或者平板，扫一扫下方的二维码。然后选择"touch"，再点击"start"，就可以愉快的开始了。

以下为尊重原作者特意留下的，针对玩游戏没有什么有用的信息233

HexGL
=========

Source code of [HexGL](http://hexgl.bkcore.com), the futuristic HTML5 racing game by [Thibaut Despoulain](http://bkcore.com)

## Branches
  * **[Master](https://github.com/BKcore/HexGL)** - Public release (stable).

## License

Unless specified in the file, HexGL's code and resources are now licensed under the *MIT License*.

## Installation

	cd ~/
	git clone git://github.com/BKcore/HexGL.git
	cd HexGL
	python -m SimpleHTTPServer
	chromium index.html

To use full size textures, swap the two textures/ and textures.full/ directories.

## Note

The development of HexGL is in a hiatus for now until I find some time and interest to work on it again.
That said, feel free to post issues, patches, or anything to make the game better and I'll gladly review and merge them.
