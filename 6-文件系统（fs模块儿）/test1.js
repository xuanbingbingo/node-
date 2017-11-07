
// fs模块儿概述
var fs = require('fs')
fs.readdir('/Users/libin', function(err, files){
    console.log(files)
})

//把数据写入文件，然后再从文件中把数据读出来
var assert = require('assert')
