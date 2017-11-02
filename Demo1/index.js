// 使用CountStream类 爬去当当网首页源码中一共出现了多少个'book'

var CountStream = require('./countstream');
var countStream = new CountStream('book');
var http = require('http')

http.get('http://1111.dangdang.com/20171030?_utm_brand_id=11106&_ddclickunion=460-5-biaoti|ad_type=0|sys_id=1', function(res){
    res.pipe(countStream)
})

countStream.on('total', function(data){
    console.log('Total matches:' , data)
})