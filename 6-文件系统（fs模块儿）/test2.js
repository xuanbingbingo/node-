
var fs = require('fs')

var readable = fs.createReadStream('./file.txt')
var writable = fs.createWriteStream('./outfile.txt')

readable.pipe(writable)

// 把文件一次放入内存
fs.readFile('./file.txt', function(err, buf){
    // console.log(buf.toString())
})

fs.writeSync(1, 'Logging to stdout')//文件描述符 0 代表stdin标准输入, 1 代表标准输出, 2 代表标准错误

//使用文件锁(暂时跳过)


