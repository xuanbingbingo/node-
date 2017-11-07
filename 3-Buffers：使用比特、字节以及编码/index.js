// 使用Buffers处理二进制
var buffer = new Buffer('abcdaaaa', 'base64')//默认utf-8编码
console.log(buffer.toString('base64'))

//创建一个程序用于输出data URI
var fs = require('fs')
var mime = 'img/png'
var encoding = 'base64'
var data = fs.readFileSync('./1.png').toString(encoding)
var uri = 'data:' + mime + ';' + encoding + ',' + data
console.log(uri)

//将uri写成一个文件
var data1 = uri.split(',')[1]
var buf = new Buffer(data1, 'base64')
fs.writeFileSync('./secondPng.png', buf)