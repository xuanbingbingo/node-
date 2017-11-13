var http = require('http')

var server = http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type':'text/plain'})
    res.write('hehedada')
    res.end()
})
server.listen(8091, function(){
    console.log('8090正在监听。。')
})