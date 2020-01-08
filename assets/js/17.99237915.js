(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{155:function(s,t,n){"use strict";n.r(t);var a=n(0),e=Object(a.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"浅析websocket"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#浅析websocket"}},[s._v("#")]),s._v(" 浅析websocket")]),s._v(" "),n("p",[s._v("要理解websocket是什么，我们得先从HTTP协议入手。这边我们主要介绍在通信方面他和websocket的区别。想要深入了解HTTP协议的小伙伴可以自行查找资料了解。")]),s._v(" "),n("p",[s._v("HTTP是客户端/服务器模式中请求-响应所用的协议，在这种模式中，浏览器向服务器提交HTTP请求，服务器响应请求的资源。言下之意就是你可以把这种模式，想象成对讲机，一个人说，另一个人听")]),s._v(" "),n("h3",{attrs:{id:"http是半双工通信"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#http是半双工通信"}},[s._v("#")]),s._v(" HTTP是半双工通信")]),s._v(" "),n("p",[s._v("他的特点就是：")]),s._v(" "),n("p",[s._v("1.同一时刻数据是单向流动的，客户端向服务端请求数据->单向，服务端向客户端返回数据->单向")]),s._v(" "),n("p",[s._v("2.服务器不能主动的推送数据给客户端")]),s._v(" "),n("p",[s._v("既然提到了半双工通信，就不得不提双工通信。在H5的websocket技术出现之前。我们有几种方式来实现这个东西，轮询，长轮询以及iframe流。今天我们就不介绍了，我们主要介绍一下我们的主人公websocket")]),s._v(" "),n("h3",{attrs:{id:"websocket的优势"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#websocket的优势"}},[s._v("#")]),s._v(" websocket的优势")]),s._v(" "),n("p",[s._v("1.支持双向通信，实时性更强(你可以来做个QQ，微信了，老铁)")]),s._v(" "),n("p",[s._v("2.更好的二进制支持")]),s._v(" "),n("p",[s._v("3.较少的控制开销(连接创建后，ws客户端、服务端进行数据交换时，协议控制的数据包头部较少)")]),s._v(" "),n("p",[s._v("下面我们来手撸一下websocket的代码，再次了解一下他的应用。我们先不借助其他工具，写一段原生的websocket代码")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("<!DOCTYPE html>\n<html>\n\t<head>\n\t\t<meta charset=\"utf-8\">\n\t\t<title>原生websocket 通信</title>\n\t</head>\n\t<body>\n\t</body>\n\t\n\t<script>\n\t\tlet ws = new WebSocket('ws://localhost:9999');\n\t\t\n\t\tws.onopen = function() {\n\t\t\tws.send('111');\n\t\t}\n\t\t\n\t\tws.onmessage = function(res){\n\t\t\tconsole.log(res);\n\t\t\t\n\t\t\tconsole.log(res.data);\n\t\t}\n\t<\/script>\n</html>\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br")])]),n("p",[s._v("好了，这边就是我们在前端页面实现一段websocket通信。首先创建连接，这边我们使用的本地连接。然后建立与服务端之间的连接，接受服务端发送的消息并触发。那么客户端的代码写完了，我们要写服务端的代码了。服务端后台我们借助于express构建一个简单的后台（不了解的同学可以自行了解一下express，或者使用koa，egg等都是一样的）。")]),s._v(" "),n("p",[s._v("安装websocket和express的依赖包，写下服务端的代码")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("const express = require('express');\nconst app = express();\n// 设置静态文件夹\napp.use(express.static(__dirname));\n// 监听3000端口\napp.listen(3000);\n// =============================================\n// 开始创建一个websocket服务\nconst Server = require('ws').Server;\n// 这里是设置服务器的端口号，和上面的3000端口不用一致\nconst ws = new Server({ port: 9999 });\n\n// 监听服务端和客户端的连接情况\nws.on('connection', function(socket) {\n    // 监听客户端发来的消息\n    socket.on('message', function(msg) {\n        console.log(msg);   // 这个就是客户端发来的消息\n        // 来而不往非礼也，服务端也可以发消息给客户端\n        socket.send(`这里是服务端对你说的话： ${msg}`);\n    });\n});\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br")])]),n("p",[s._v("现在我们执行一下该文件 node server.js，浏览器打开localhost:3000浏览器就会打开之前的index页面，打开控制台就可以看到服务器返回的信息了。")]),s._v(" "),n("p",[s._v("最简单的一个demo我们就完成了。下面我们进行一个进阶，写一个简单的聊天室（一个很low的聊天室）。这边我们借助于"),n("a",{attrs:{href:"https://socket.io/get-started/chat/",target:"_blank",rel:"noopener noreferrer"}},[s._v("socket.io"),n("OutboundLink")],1),s._v(",这边的demo也是模仿官网示例的，我只是代码的搬运工！")]),s._v(" "),n("p",[s._v("老样子，我们先安装express以及socketio，为了防止有同学不会，我们简单写一下")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("npm install --save express\nnpm install --save socket.io\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("安装完了我们在主项目下分别建立index.html和index.js文件。分别代表我们的服务端文件和客户端文件。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("<!doctype html>\n<html>\n\t<head>\n\t\t<title>Socket.IO chat</title>\n\t\t<style>\n\t\t\t* {\n\t\t\t\tmargin: 0;\n\t\t\t\tpadding: 0;\n\t\t\t\tbox-sizing: border-box;\n\t\t\t}\n\n\t\t\tbody {\n\t\t\t\tfont: 13px Helvetica, Arial;\n\t\t\t}\n\n\t\t\tform {\n\t\t\t\tbackground: #000;\n\t\t\t\tpadding: 3px;\n\t\t\t\tposition: fixed;\n\t\t\t\tbottom: 0;\n\t\t\t\twidth: 100%;\n\t\t\t}\n\n\t\t\tform input {\n\t\t\t\tborder: 0;\n\t\t\t\tpadding: 10px;\n\t\t\t\twidth: 90%;\n\t\t\t\tmargin-right: .5%;\n\t\t\t}\n\n\t\t\tform button {\n\t\t\t\twidth: 9%;\n\t\t\t\tbackground: rgb(130, 224, 255);\n\t\t\t\tborder: none;\n\t\t\t\tpadding: 10px;\n\t\t\t}\n\n\t\t\t#messages {\n\t\t\t\tlist-style-type: none;\n\t\t\t\tmargin: 0;\n\t\t\t\tpadding: 0;\n\t\t\t}\n\n\t\t\t#messages li {\n\t\t\t\tpadding: 5px 10px;\n\t\t\t}\n\n\t\t\t#messages li:nth-child(odd) {\n\t\t\t\tbackground: #eee;\n\t\t\t}\n\t\t</style>\n\t\t<script src=\"/socket.io/socket.io.js\"><\/script>\n\t\t<script src=\"https://cdn.bootcss.com/jquery/3.4.1/jquery.js\"><\/script>\n\t</head>\n\t<body>\n\t\t<ul id=\"messages\"></ul>\n\t\t<form action=\"\">\n\t\t\t<input id=\"m\" autocomplete=\"off\" /><button>Send</button>\n\t\t</form>\n\t</body>\n\n\t<script>\n\t\t$(function() {\n\t\t\tvar socket = io();\n\t\t\t$('form').submit(function(e) {\n\t\t\t\te.preventDefault(); // prevents page reloading\n\t\t\t\tsocket.emit('chat message', $('#m').val());\n\t\t\t\t$('#m').val('');\n\t\t\t\treturn false;\n\t\t\t});\n\n\t\t\tsocket.on('chat message', function(msg) {\n\t\t\t\t$('#messages').append($('<li>').text(msg));\n\t\t\t});\n\t\t});\n\t<\/script>\n</html>\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br"),n("span",{staticClass:"line-number"},[s._v("51")]),n("br"),n("span",{staticClass:"line-number"},[s._v("52")]),n("br"),n("span",{staticClass:"line-number"},[s._v("53")]),n("br"),n("span",{staticClass:"line-number"},[s._v("54")]),n("br"),n("span",{staticClass:"line-number"},[s._v("55")]),n("br"),n("span",{staticClass:"line-number"},[s._v("56")]),n("br"),n("span",{staticClass:"line-number"},[s._v("57")]),n("br"),n("span",{staticClass:"line-number"},[s._v("58")]),n("br"),n("span",{staticClass:"line-number"},[s._v("59")]),n("br"),n("span",{staticClass:"line-number"},[s._v("60")]),n("br"),n("span",{staticClass:"line-number"},[s._v("61")]),n("br"),n("span",{staticClass:"line-number"},[s._v("62")]),n("br"),n("span",{staticClass:"line-number"},[s._v("63")]),n("br"),n("span",{staticClass:"line-number"},[s._v("64")]),n("br"),n("span",{staticClass:"line-number"},[s._v("65")]),n("br"),n("span",{staticClass:"line-number"},[s._v("66")]),n("br"),n("span",{staticClass:"line-number"},[s._v("67")]),n("br"),n("span",{staticClass:"line-number"},[s._v("68")]),n("br"),n("span",{staticClass:"line-number"},[s._v("69")]),n("br"),n("span",{staticClass:"line-number"},[s._v("70")]),n("br"),n("span",{staticClass:"line-number"},[s._v("71")]),n("br"),n("span",{staticClass:"line-number"},[s._v("72")]),n("br"),n("span",{staticClass:"line-number"},[s._v("73")]),n("br"),n("span",{staticClass:"line-number"},[s._v("74")]),n("br"),n("span",{staticClass:"line-number"},[s._v("75")]),n("br"),n("span",{staticClass:"line-number"},[s._v("76")]),n("br"),n("span",{staticClass:"line-number"},[s._v("77")]),n("br")])]),n("p",[s._v("客户端代码如上所示，主体部门\n我们在页面的提交按钮，进行了监听事件，我们对socket的chat message事件添加了钩子处理，方便与服务端进行数据交互。我们可以看下下面又给socket绑定了一个on事件，这边就是服务端接收到上面的消息之后回传过来的消息事件。这边有点像vue的组件之间的通信功能，进行数据的互相传递功能。下面我们看下服务端代码")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("var app = require('express')();\nvar http = require('http').createServer(app);\nvar io = require('socket.io')(http);\n\napp.get('/', function(req, res){\n  res.sendFile(__dirname + '/index.html');\n});\n\n// io.on('connection', function(socket){\n//   socket.on('chat message', function(msg){\n//     console.log('信息' + msg);\n//   });\n// });\n\n// 发送给所有人，客户端先发送信心过来，服务端接收到，发送给所有客户端\nio.on('connection', function(socket){\n  socket.on('chat message', function(msg){\n    io.emit('chat message',msg)\n  });\n});\n\nhttp.listen(3000, function(){\n  console.log('listening on *:3000');\n});\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br")])]),n("p",[s._v("可以看出来，服务端链接完毕之后对客户端传过来的信息进行了接受，同时再次吧该信息传给了客户端。这边我们就可以理解了，这里的聊天室功能就是用户A把信息先传给服务端，然后由服务端通知所有客户端进行数据处理来实现聊天室的功能。下面一张动图就是我们实现的效果图。\n"),n("img",{attrs:{src:"https://ws2.sinaimg.cn/large/006tNc79gy1g619vi69fig30te0dwnpd.gif",alt:""}})])])}),[],!1,null,null,null);t.default=e.exports}}]);