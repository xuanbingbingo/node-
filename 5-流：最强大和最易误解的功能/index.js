
//流：最强大和最容易误解的功能

//一个使用流的简单的静态web服务器

// var http = require('http')
// var fs = require('fs')

// http.createServer(function(req, res){
//     fs.createReadStream(__dirname + '/index.html').pipe(res)
// }).listen(8000)

//采用gzip压缩的静态web服务器

var http = require('http')
var fs = require('fs')
var zlib = require('zlib')

http.createServer(function(req, res){
    res.writeHead(200, {'content-encoding' : 'gzip'})
    fs.createReadStream(__dirname + '/index.html')
    .pipe(zlib.createGzip())
    .pipe(res)
}).listen(8007)
