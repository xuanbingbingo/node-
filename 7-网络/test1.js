//一个简单的http服务器
var assert = require('assert')

var http = require('http')

var server = http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type':'text/plain'})
    res.write('heheda')
    res.end()
})
server.listen(8088, function(){
    console.log('8088正在监听。。。')
})

var req = http.request({
    port: 8088
},function(res){
    console.log('Http headers', res.headers)
    res.on('data', function(data){
        console.log('Body:', data.toString())
        console.log('statusCode', res.statusCode)
        server.unref()//服务器安全结束
    })
})

req.end()