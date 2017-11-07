
// 流的错误处理

var fs = require('fs')
var stream = fs.createReadStream('./test.txt')

stream.on('error', function(err){
    console.trace()
    console.error('Stack:', err.stack)
    console.error('The error raised was:', err)
})

stream.pipe(process.stdout)