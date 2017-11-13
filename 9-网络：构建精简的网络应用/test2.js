
// 一个可以用于检测和重启一个简单的web服务器的原生例子（简单例子,并不实用，只是了解一下原理）

var fs = require('fs')
var exec = require('child_process').exec

function watch(){
    var child = exec('node server.js');
    var watcher = fs.watch(__dirname + '/server.js', function(event){
        console.log('File changed,reloading.')
        child.kill();
        watcher.close();
        watch();
    })
}
try {
    watch()
} catch (error) {
    console.error(error)
}


// nodemon模块儿封装了检测文件并重启服务的功能
