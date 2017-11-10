
// fs模块儿概述
var fs = require('fs')
fs.readdir('/Users/libin', function(err, files){
    // console.log(files)
})

//把数据写入文件，然后再从文件中把数据读出来
var assert = require('assert')
var fd = fs.openSync('./file.txt', 'w+')
var writeBuf = new Buffer('some data to write')
fs.writeSync(fd, writeBuf, 0, writeBuf.length, 0)

var readBuf = new Buffer(writeBuf.length)
fs.readSync(fd, readBuf, 0, writeBuf.length, 0)
assert.equal(writeBuf.toLocaleString, readBuf.toLocaleString)

fs.closeSync(fd)
