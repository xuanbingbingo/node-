//一个简易的代理服务器

var express = require('express');
var request = require('request');
var app = express();
app.use('/', function(req, res) {
    var url = 'https://www.baidu.com/' + req.url;
    req.pipe(request(url)).pipe(res);
});
app.listen(process.env.PORT || 3000);
