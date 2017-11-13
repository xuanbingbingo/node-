// 一个快速的静态web服务器

var connect = require('connect')
var serveStatic = require('serve-static')

var app = connect()
app.use(serveStatic(__dirname)).listen(8082)


