
//创建DNS请求

var dns = require('dns')

//dns.lookup通过一个线程池
dns.lookup('www.baidu.com', function(err, address){
    if(err){
        console.error('Error', err)
    }
    console.log(address)
})
//dns.resolve异步地解析域名
dns.resolve('www.baidu.com', function(err, address){
    if(err){
        console.error('Error', err)
    }
    console.log(address)
})