
//EventEmitter实现多个模块儿之间的相互通信

// 在Express中复用EventEmitter

var express = require('express')
var app = express()

app.on('hello-alert', function(){
    console.warn('Warning!')
})

app.get('/', function(){
    res.app.emit('hello-alert')//使用res.app获取app全局对象
    res.send('hello world')
})