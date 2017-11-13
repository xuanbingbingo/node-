
//使用cheerio从一个页面中获取并处理html（适用于爬虫）

var cheerio = require('cheerio')
var fs = require('fs')

fs.readFile('./index.html', 'utf8', function(err, html){
    var $ = cheerio.load(html)
    console.log($.html())
    var releases = $('.bingo')
    console.log(releases.html())
})

//在浏览器端使用Node模块儿(暂时跳过)